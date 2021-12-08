const shopBtn = document.querySelector("#shop");
const menuContent = document.querySelector(".menu-content");

shopBtn.addEventListener("click", function (e) {
  menuContent.classList.toggle("menu-content-show");
});
