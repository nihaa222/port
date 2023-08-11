const btnNavEL = document.querySelector(".mobile-nav");
const headerEL = document.querySelector(".header");

btnNavEL.addEventListener("click", function () {
  headerEL.classList.toggle("nav-open");
});

function openpage1() {
  window.location.href = "index2.html#actual-about";
}

window.addEventListener("load", function () {
  // After a delay, remove the preloader
  setTimeout(function () {
    var preloader = document.querySelector(".preloader");
    preloader.addEventListener("animationend", function () {
      preloader.style.display = "none";
    });
    preloader.classList.add("fadeOut");
  }, 1200); // Set the delay time in milliseconds (e.g., 1500ms)
});

function openpage1() {
  document.body.style.opacity = 0;
  setTimeout(function () {
    window.location.href = "index2.html#actual-about";
  }, 500); // Adjust the delay as needed
}

function openpage2() {
  document.body.style.opacity = 0;
  setTimeout(function () {
    window.location.href = "index2.html#actual-about";
  }, 500); // Adjust the delay as needed
}
