// Hamburger Menu Functionality
document.getElementById("hamburger").addEventListener("click", () => {
  const navbar = document.querySelector(".nav-links");
  navbar.classList.toggle("active"); // Toggle the display of nav links
});

// Toggle dropdown on click for mobile
const dropdowns = document.querySelectorAll(".dropdown");

dropdowns.forEach((dropdown) => {
  dropdown.addEventListener("click", (event) => {
    event.stopPropagation(); // Prevent event from bubbling up
    dropdown.classList.toggle("active"); // Toggle the dropdown
  });
});

// Close dropdowns if clicking outside
document.addEventListener("click", () => {
  dropdowns.forEach((dropdown) => {
    dropdown.classList.remove("active"); // Hide all dropdowns
  });
});

// Slideshow functionality
let slideIndex = 0;
showSlides(); // Initial call to display slides

// Function to display slides
function showSlides() {
  let i;
  const slides = document.getElementsByClassName("mySlides");
  const dots = document.getElementsByClassName("dot");

  // Hide all slides
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }

  // Increment slide index
  slideIndex++;
  if (slideIndex > slides.length) {
    slideIndex = 1;
  } // Loop back to the first slide

  // Remove "active" class from all dots
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }

  // Display current slide and activate corresponding dot
  slides[slideIndex - 1].style.display = "block";
  dots[slideIndex - 1].className += " active";

  // Change slide every 10 seconds (10000 milliseconds)
  setTimeout(showSlides, 10000);
}

// Set current slide when clicking on dots
function currentSlide(n) {
  slideIndex = n;
  showSlides();
}
// hello
// Function to toggle the chatbot window
function toggleChatbot() {
  const chatbotWindow = document.getElementById("chatbotWindow");
  if (
    chatbotWindow.style.display === "none" ||
    chatbotWindow.style.display === ""
  ) {
    chatbotWindow.style.display = "block";
  } else {
    chatbotWindow.style.display = "none";
  }
}
