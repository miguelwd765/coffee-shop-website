const shopBtn = document.querySelector(".menu-btn");
const menuContent = document.querySelector(".menu-content");
const dropDown = document.querySelector(".dropdown-menu");

shopBtn.addEventListener("click", function (e) {
  menuContent.classList.toggle("menu-content-show");

  window.addEventListener("click", function (e) {
    if (
      e.target.matches(".dropdown-menu") ||
      e.target.matches(".menu-btn") ||
      e.target.matches(".items-hidden") ||
      e.target.matches("#drop-icon")
    ) {
      return;
    } else {
      menuContent.classList.remove("menu-content-show");
    }
  });
});

const navToggle = document.querySelector(".nav-toggle");
const navMobile = document.querySelector(".nav-mobile");
const navMobileLinks = document.querySelectorAll(".nav-mobile-link");

navToggle.addEventListener("click", function () {
  navMobile.classList.toggle("nav-mobile-active");

  navMobileLinks.forEach((links, index) => {
    if (links.style.animation) {
      links.style.animation = "";
    } else {
      links.style.animation = `navLinksFade .1s ease forwards ${
        index / 10 + 0.1
      }s`;
    }
  });
});

const mobileMenuContent = document.querySelector(".mobile-menu-content");
const mobileMenuBtn = document.querySelector(".mobile-menu-btn");

mobileMenuBtn.addEventListener("click", function (e) {
  mobileMenuContent.classList.toggle("menu-content-show");
});
