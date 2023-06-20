async function fetchData() {
  try {
    const response = await fetch(
      "https://raw.githubusercontent.com/lucaslehi/wdd230/main/chamber/json/data.json"
    );
    const data = await response.json();
    return data.business;
  } catch (error) {
    console.error("Error fetching data:", error);
    return [];
  }
}

function createCard(business) {
  const card = document.createElement("div");
  card.classList.add("card");

  const placeholder = document.createElement("div");
  placeholder.classList.add("card-image-placeholder");
  card.appendChild(placeholder);

  const io = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        const image = new Image();
        image.src = business.image;
        image.alt = business.name;
        image.classList.add("card-image");
        image.addEventListener("load", () => {
          placeholder.replaceWith(image);
        });
        io.disconnect();
      }
    });
  });
  io.observe(placeholder);

  const body = document.createElement("div");
  body.classList.add("card-body");

  const title = document.createElement("div");
  title.classList.add("card-title");
  title.textContent = business.name;
  body.appendChild(title);

  const address = document.createElement("div");
  address.classList.add("card-text");
  address.textContent = business.address;
  body.appendChild(address);

  const phone = document.createElement("div");
  phone.classList.add("card-text");
  phone.textContent = business.phone;
  body.appendChild(phone);

  const webUrl = document.createElement("a");
  webUrl.classList.add("card-link");
  webUrl.textContent = business["web-url"];
  webUrl.href = business["web-url"];
  webUrl.target = "_blank";
  body.appendChild(webUrl);

  card.appendChild(body);

  return card;
}

async function loadCards() {
  const cardsContainer = document.querySelector(".cards");
  const businesses = await fetchData();

  businesses.forEach((business) => {
    const card = createCard(business);
    cardsContainer.appendChild(card);
  });
}

function createTable(data) {
  const tableBody = document.querySelector("tbody");

  data.forEach((business) => {
    let tr = document.createElement("tr");
    let td_name = document.createElement("td");
    let td_address = document.createElement("td");
    let td_phone = document.createElement("td");
    let td_url = document.createElement("td");

    td_name.textContent = business.name;
    td_address.textContent = business.address;
    td_phone.textContent = business.phone;
    td_url.textContent = business["web-url"];

    tr.appendChild(td_name);
    tr.appendChild(td_address);
    tr.appendChild(td_phone);
    tr.appendChild(td_url);

    tableBody.appendChild(tr);
  });
}

document.addEventListener("DOMContentLoaded", async function () {
  const cardsContainer = document.querySelector(".cards");
  const table = document.querySelector("table");
  const cardsButton = document.querySelector("#cards");
  const listButton = document.querySelector("#list");

  cardsButton.addEventListener("click", function () {
    cardsContainer.style.display = "flex";
    table.style.display = "none";
  });

  listButton.addEventListener("click", function () {
    cardsContainer.style.display = "none";
    table.style.display = "table";
  });

  await loadCards();

  const businesses = await fetchData();
  createTable(businesses);

  cardsContainer.style.display = "flex";
  table.style.display = "none";
});
