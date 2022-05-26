const menuIcon = document.querySelector(".hamburger-icon");
const navMenu = document.querySelector(".navigation-menu");
const caret = document.querySelectorAll(".nav-links");
const dropdownMenu = document.querySelectorAll(".dropdown-menu");

console.log(caret);

menuIcon.addEventListener("click", () => {
  navMenu.classList.toggle("show");
});

Array.from(caret).forEach((item) =>
  item.addEventListener("click", (e) => {
    if (e.target.classList.contains("fa-caret-down")) {
      e.target.nextElementSibling.classList.toggle("show-menu");
    }
  })
);
