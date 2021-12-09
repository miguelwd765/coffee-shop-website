const shopBtn = document.querySelector("#shop");
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
