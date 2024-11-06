
const hamburger = document.getElementById('hamburger');
const navLinks = document.querySelector('.nav-links');
const dropdowns = document.querySelectorAll('.dropdown');

hamburger.addEventListener('click', () => {
    navLinks.classList.toggle('active');
});

// Add click event to each dropdown to toggle active class
dropdowns.forEach(dropdown => {
    dropdown.addEventListener('click', () => {
        dropdown.classList.toggle('active');
    });
});

