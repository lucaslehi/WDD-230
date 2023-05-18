const date = new Date();
document.getElementById("date").textContent = new Date().toDateString(
  "en-US",
  date
);

document.getElementById("currentdate").textContent = document.lastModified;
const year = new Date();
document.getElementById("year").textContent = new Date().getFullYear(
  "en-US",
  year
);
