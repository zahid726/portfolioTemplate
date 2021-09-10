// const hamburgerButton = document.getElementById('hamburger')
// const navList = document.getElementById('navList')

// function toggleButton() {
//     navList.classList.toggle('show')
// }

// hamburgerButton.addEventListener('click', toggleButton)

// const hamburger = document.querySelector(".hamburger");
//     const navLinks = document.querySelector(".nav-links");
//     const links = document.querySelectorAll(".nav-links li");

//     hamburger.addEventListener("click", () => {
//     navLinks.classList.toggle("open");
//     links.forEach(link => {
//         link.classList.toggle("fade");
//     });
//     });
const navToggle = document.querySelector(".nav-toggle");
const links = document.querySelector("body");

navToggle.addEventListener("click", function () {
  links.classList.toggle("nav-links-open");

});