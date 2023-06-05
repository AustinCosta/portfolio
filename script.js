//Global variables for DOM manipulation
const hamburger = document.querySelector(".hamburger");
const navMenu = document.querySelector(".nav-menu");
const navLink = document.querySelectorAll(".nav-link");

//Click listeners for opening or closing the hamburger menu
hamburger.addEventListener("click", mobileMenu);
navLink.forEach(n => n.addEventListener("click", closeMenu));

// ========================== //
//         FUNCTIONS          //
// ========================== //

// Add the active class to hamburger and nav menu when the hamburger menu icon is clicked
function mobileMenu () {
    hamburger.classList.toggle("active");
    navMenu.classList.toggle("active");
}

//Close the navbar after the user clicks a link
//This function will remove the active class from both the nav-menu
//and the hamburger which closes the mobile menu
function closeMenu() {
    hamburger.classList.remove("active");
    navMenu.classList.remove("active");
}