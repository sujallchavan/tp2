document.addEventListener("DOMContentLoaded", function () {
  // Toggle dropdown menu
  document.querySelectorAll(".dropdown-toggle").forEach((toggle) => {
    toggle.addEventListener("click", function (event) {
      event.preventDefault();

      // Close other dropdowns before opening the current one
      document.querySelectorAll(".dropdown-content").forEach((content) => {
        if (content !== this.nextElementSibling) {
          content.classList.remove("show");
        }
      });

      // Toggle the current dropdown
      const dropdown = this.nextElementSibling;
      dropdown.classList.toggle("show");
    });
  });

  // Close dropdown if clicked outside
  window.addEventListener("click", function (e) {
    if (!e.target.matches(".dropdown-toggle")) {
      document.querySelectorAll(".dropdown-content").forEach((content) => {
        content.classList.remove("show");
      });
    }
  });

  // Hamburger menu toggle for mobile view
  const hamburger = document.getElementById("hamburger");
  const navLinks = document.querySelector(".nav-links");

  hamburger.addEventListener("click", () => {
    navLinks.classList.toggle("active");
  });
});
