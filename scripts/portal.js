let date = new Date();
console.log(date);

let year = date.getFullYear();
console.log(year);

document.querySelector(
  "h3"
).innerHTML = `&copy ${year} .: | :. Lucas Gomes .: | :. Idaho`;

let currentDate = document.lastModified;

document.querySelector(".update").textContent = `Last Updated: ${currentDate}`;
