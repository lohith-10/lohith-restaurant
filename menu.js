const menu = document.querySelector(".menu-bar");
const navList = document.querySelector("nav");
const links = document.querySelector(".nav-links li");
menu.addEventListener("click", () => {
  navList.classList.toggle("active");
  menu.classList.toggle("close");
});
