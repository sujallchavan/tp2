const express = require('express');
const multer = require('multer');
const mongoose = require('mongoose');
const fs = require('fs');
const cors = require('cors'); // Import the CORS package
const path = require('path');
const app = express();

app.use(cors());

// Set EJS as the view engine
// app.set('view engine', 'ejs');

// Middleware to parse incoming request data
app.use(express.static('public'));

// Connect to MongoDB Atlas
mongoose.connect('mongodb+srv://kaushal:l3urcxPpIs1Lpous@gallery.8ttlb.mongodb.net/img?retryWrites=true&w=majority&appName=gallery', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
}).then(() => console.log('MongoDB connected'))
  .catch(err => console.error(err));

// Create a schema for storing images in MongoDB
const imageSchema = new mongoose.Schema({
  name: String,
  img: {    
    data: Buffer,
    contentType: String
  }
});
const Image = mongoose.model('Image', imageSchema);

// Set up Multer for file upload
const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, 'uploads/');
  },
  filename: (req, file, cb) => {
    cb(null, file.fieldname + '-' + Date.now() + path.extname(file.originalname));
  }
});

const upload = multer({ storage: storage });

app.get('/', (req, res) => {
  res.send("Sorted")
});

// a route in Node.js that returns a list of images for apis:
app.get('/images', async (req, res) => {
  const images = await Image.find();
  if(images.length == 0){
    res.send("message: empty");
  }else{
    res.json(images);  // Send all images as JSON
  }
});

// Route to render the form for image upload
// app.get('/', async (req, res) => {
//   // Fetch all images from MongoDB to display on the frontend
//   const images = await Image.find();
//   res.render('index', { images: images });
// });

// Route to handle image upload
app.post('/upload', upload.single('image'), (req, res) => {
  const newImage = new Image({
    name: req.body.name,
    img: {
      data: fs.readFileSync(path.join(__dirname + '/uploads/' + req.file.filename)),
      contentType: req.file.mimetype // dynamic content type
    }
  });

  newImage.save()
    .then(() => res.send('Image uploaded successfully!'))
    .catch(err => res.status(400).send('Error uploading image: ' + err));
});

// Route to serve images (this URL will display the image)
app.get('/image/:id', async (req, res) => {
  const image = await Image.findById(req.params.id);
  if (image) {
    res.set('Content-Type', image.img.contentType);
    res.send(image.img.data);  // Send the image data
  } else {
    res.status(404).send('Image not found');
  }
});

// Start the server
app.listen(3000, () => {
  console.log('Server started on http://localhost:3000');
});
