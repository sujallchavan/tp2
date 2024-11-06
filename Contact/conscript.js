// Hamburger Menu Functionality
document.getElementById('hamburger').addEventListener('click', () => {
    const navbar = document.querySelector('.nav-links');
    navbar.classList.toggle('active');
});

// Toggle dropdown on click for mobile
const dropdowns = document.querySelectorAll('.dropdown');

dropdowns.forEach(dropdown => {
    dropdown.addEventListener('click', (event) => {
        event.stopPropagation();
        dropdown.classList.toggle('active');
    });
});

// Close dropdowns if clicking outside
document.addEventListener('click', () => {
    dropdowns.forEach(dropdown => {
        dropdown.classList.remove('active');
    });
});
