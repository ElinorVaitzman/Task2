// toggle icon navbar
let menuIcon = document.querySelector("#menu-icon");
let navbar = document.querySelector(".navbar");

menuIcon.onclick = () => {
  menuIcon.classList.toggle("bx-x");
  navbar.classList.toggle("active");
};

// removes toggle icon and navbar when clicking on navbar links
menuIcon.classList.remove("bx-x");
navbar.classList.remove("active");

// sticky header JS code for showing understaning
// window.onscroll = () => {
// let header = document.querySelector("header");
// header.classList.toggle("sticky", window.scrollY > 100);
// };
