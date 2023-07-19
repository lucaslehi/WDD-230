//images
const images = document.querySelectorAll("[data-src]");

const imgOptions = {
  threshold: 0,
};

function preloadImage(img) {
  const src = img.getAttribute("data-src");
  if (src) {
    img.src = src;
    img.removeAttribute("data-src");
  }
}

const imgObserver = new IntersectionObserver((entries, observer) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      preloadImage(entry.target);
      observer.unobserve(entry.target);
    }
  });
}, imgOptions);

images.forEach((img) => {
  imgObserver.observe(img);
});

// mixedDrinks localStorage
const mixedDrinks = localStorage.getItem("mixedDrinks");
const mixedDrinksCount = mixedDrinks ? mixedDrinks : 0;
document.getElementById(
  "mixedDrinks"
).textContent = `Mixed Drinks: ${mixedDrinksCount}`;

// btn redirect
const myBtn = document.getElementById("myBtn");
myBtn.addEventListener("click", function () {
  window.location.href = "../FinalProject/fresh.html";
});
