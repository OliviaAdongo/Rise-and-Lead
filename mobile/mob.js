const mobileNav = document.querySelector(".small-hamburger");
const navbar = document.querySelector(".small-menubar");

const toggleNav = () => {
  navbar.classList.toggle("active");
  mobileNav.classList.toggle("small-hamburger-active");
};
mobileNav.addEventListener("click", () => toggleNav());
