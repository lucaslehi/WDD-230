let date = new Date();
console.log(date);

let year = date.getFullYear();
console.log(year);

document.querySelector(
  ".copy"
).innerHTML = `&copy ${year} .: | :. Lucas Gomes de Araujo .: | :. Idaho`;

let currentDate = document.lastModified;

document.querySelector(".update").textContent = `Last Updated: ${currentDate}`;
