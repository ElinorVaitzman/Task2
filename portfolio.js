// toggle icon navbar
let menuIcon = document.querySelector("#menu-icon");
let navbar = document.querySelector(".navbar");

menuIcon.onclick = () => {
  menuIcon.classList.toggle("bx-x");
  navbar.classList.toggle("active");
};

// sticky header
// window.onscroll = () => {
let header = document.querySelector("header");
header.classList.toggle("sticky", window.scrollY > 100);
// };

// removes toggle icon and navbar when click navbar links
menuIcon.classList.remove("bx-x");
navbar.classList.remove("active");
