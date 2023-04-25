let date = new Date();
console.log(date);

let year = date.getFullYear();
console.log(year);

document.querySelector(
  "h3"
).innerHTML = `&copy 2023 .: | :. Lucas Gomes .: | :. Idaho`;

let currentDate = document.lastModified;

document.querySelector(".update").textContent = `Last Updated: ${currentDate}`;
