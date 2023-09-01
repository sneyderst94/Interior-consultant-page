const visible = document.querySelector(".visible");
const menuMobile = document.querySelector(".menu_mobile");
const closeMenu = document.querySelector(".close_menu");

menuMobile.addEventListener("click", () => {
  visible.classList.toggle("visible");
});

closeMenu.addEventListener("click", () => {
  visible.classList.toggle("visible");
});
