const images = document.querySelectorAll("[data-src]");

const optionsImg = { threshold: 0.8, rootMargin: "0px 0px 200px 0px" };

function preloadImage(img) {
  const source = img.getAttribute("data-src");
  if (!source) {
    return;
  }
  img.src = source;
}
const io = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (!entry.isIntersecting) {
      return;
    } else {
      preloadImage(entry.target);
      io.unobserve(entry.target);
    }
  });
}, optionsImg);

images.forEach((img) => {
  io.observe(img);
});

if (localStorage.getItem("lastVisit")) {
  let lastVisit = new Date(parseInt(localStorage.getItem("lastVisit")));
  let messageElement = document.getElementById("diff");
  let daysSinceLastVisit = Math.round(
    (new Date() - new Date(lastVisit)) / (1000 * 60 * 60 * 24)
  );
  messageElement.innerHTML = daysSinceLastVisit;
} else {
  localStorage.setItem("lastVisit", Date.now().toString());
  let messageElement = document.getElementById("days");
  messageElement.innerHTML = "Welcome!!!";
}
