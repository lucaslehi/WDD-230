const banner = document.querySelector("#banner");
var DayOfWeek = new Date().getDay();

if (DayOfWeek == 1 || DayOfWeek == 2) {
  banner.style.display = "block";
} else {
  banner.style.display = "none";
}

const bannerClose = document.querySelector("#close-banner");

bannerClose.addEventListener("click", function () {
  banner.style.display = "none";
});
