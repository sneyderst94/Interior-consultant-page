const visible = document.querySelector(".visible");
const menuMobile = document.querySelector(".menu__mobile");

menuMobile.addEventListener("click", () => {
  visible.classList.toggle("visible");
});
