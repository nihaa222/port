function openpage2() {
  window.location.href = "index.html#contacts";
}
function openpage3() {
  window.location.href = "index.html#viewwork";
}

const btnNavEL = document.querySelector(".mobile-nav");
const headerEL = document.querySelector(".header");

btnNavEL.addEventListener("click", function () {
  headerEL.classList.toggle("nav-open");
});
