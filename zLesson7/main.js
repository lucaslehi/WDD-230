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
    console.log(entries);
  });
}, optionsImg);

images.forEach((img) => {
  io.observe(img);
});
