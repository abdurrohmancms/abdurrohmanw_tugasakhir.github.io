//toggle
const navlink = document.querySelector(".navlink");

//hamburger diklik
document.querySelector("#hamburger").onclick = () => {
  navlink.classList.toggle("active");
};

//hamburger hilang
const hamburger = document.querySelector("#hamburger");

document.addEventListener("click", function (e) {
  if (!hamburger.contains(e.target) && !navlink.contains(e.target)) {
    navlink.classList.remove("active");
  }
});
