// images
const images = document.querySelectorAll("[data-src]");

// Set options for the intersection observer
const imgOptions = {
  threshold: 0,
};

// Function to preload an image
function preloadImage(img) {
  const src = img.getAttribute("data-src");
  if (src) {
    img.src = src;
    img.removeAttribute("data-src");
  }
}

// Create an intersection observer to lazy load images
const imgObserver = new IntersectionObserver((entries, observer) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      preloadImage(entry.target);
      observer.unobserve(entry.target);
    }
  });
}, imgOptions);

// Observe all images with a data-src attribute
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
