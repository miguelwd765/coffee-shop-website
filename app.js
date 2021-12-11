const shopBtn = document.querySelector(".menu-btn");
const menuContent = document.querySelector(".menu-content");

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
      links.style.animation = `navLinksFade .2s ease forwards ${
        index / 10 + 0.1
      }s`;
    }
  });
});

const mobileMenuContent = document.querySelector(".mobile-menu-content");
const mobileMenuBtn = document.querySelector(".mobile-menu-btn");

mobileMenuBtn.addEventListener("click", function (e) {
  mobileMenuContent.classList.toggle("menu-content-show");

  window.addEventListener("click", function (e) {
    if (
      e.target.matches(".mobile-dropdown") ||
      e.target.matches(".mobile-menu-btn") ||
      e.target.matches(".items-hidden") ||
      e.target.matches("#drop-icon-mobile")
    ) {
      return;
    } else {
      mobileMenuContent.classList.remove("menu-content-show");
    }
  });
});

const newsInput = document.querySelector(".newsletter-input");
const newsTitle = document.querySelector(".newsletter-title");
const newsForm = document.querySelector(".newsletter-form");

newsForm.addEventListener("submit", function (e) {
  e.preventDefault();
  if (!newsInput.value) {
    alert("Not a valid email address");
  } else {
    newsTitle.textContent = "You are now added to the newsletter.";
    newsInput.value = "";
  }
});

const indQuestion = document.querySelectorAll(".question-ind");

for (let question of indQuestion) {
  const btn = question.querySelector(".question-btn");
  btn.addEventListener("click", function (e) {
    for (let q of indQuestion) {
      if (q !== question) {
        q.classList.remove("show-text");
      }
    }
    question.classList.toggle("show-text");
  });
}
