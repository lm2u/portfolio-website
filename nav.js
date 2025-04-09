const menuToggle = document.getElementById("mobile-menu");
const navList = document.querySelector(".nav-list");
const dropdowns = document.querySelectorAll(".dropdown");

menuToggle.addEventListener("click", () => {
  navList.classList.toggle("active");
});

// Toggle dropdowns on mobile
dropdowns.forEach((dropdown) => {
  dropdown.addEventListener("click", (e) => {
    if (window.innerWidth <= 768) {
      e.preventDefault();
      dropdown.classList.toggle("open");
    }
  });
});
