const date = new Date();

let randomFruits = [];

const apiURL =
  "https://raw.githubusercontent.com/lucaslehi/wdd230/main/FinalProject/json/fruit.json";

const populateSelectElements = (fruits) => {
  for (let i = 1; i <= 3; i++) {
    const selectElement = document.getElementsByName(`fruit${i}`)[0];
    fruits.forEach((fruit) => {
      const option = document.createElement("option");
      option.text = fruit.name;
      option.value = fruit.name;
      selectElement.appendChild(option); // Append the option to the <select> element
    });
  }
};

const getRandomFruit = async () => {
  const response = await fetch(apiURL);
  const data = await response.json();

  for (let i = 1; i <= 3; i++) {
    const fruitIndex = Math.floor(Math.random() * data.length);
    const fruit = data[fruitIndex];

    document.querySelector(`#fruit${i} .fruit`).textContent = fruit.name;
    document.querySelector(`#fruit${i} input`).value = fruit.name;

    randomFruits.push([
      fruit.name,
      fruit.nutritions.carbohydrates,
      fruit.nutritions.protein,
      fruit.nutritions.fat,
      fruit.nutritions.sugar,
      fruit.nutritions.calories,
    ]);
  }

  populateSelectElements(data); // Call the function to populate select elements

  console.log(randomFruits);

  for (let i = 1; i <= 3; i++) {
    const selectElement = document.getElementById(`fruit${i}`);
    selectElement.addEventListener("click", () => {
      selectElement.size = selectElement.getElementsByTagName("option").length;
    });
  }
  return randomFruits;
};

getRandomFruit();

// -----------

let mixedDrinks = localStorage.getItem(0) ? localStorage.getItem(0) : 0;

let orderDate = `${
  date.getMonth() + 1
}/${date.getDate()}/${date.getFullYear()}`;

function order(event) {
  event.preventDefault();
  mixedDrinks++;
  localStorage.setItem("mixedDrinks", mixedDrinks);

  let totalCarbohydrate = 0;
  let totalProtein = 0;
  let totalFat = 0;
  let totalSugar = 0;
  let totalCalories = 0;

  let allCheckBoxes = document.getElementsByName("box");
  let allMarkedCheckboxes = [];
  for (let checkbox of allCheckBoxes) {
    if (checkbox.checked) {
      allMarkedCheckboxes = allMarkedCheckboxes.concat(" " + checkbox.value);
      for (let fruit of randomFruits) {
        if (checkbox.value == fruit[0]) {
          totalCarbohydrate += fruit[1];
          totalProtein += fruit[2];
          totalFat += fruit[3];
          totalSugar += fruit[4];
          totalCalories += fruit[5];
        }
      }
    }
  }
  document.querySelector(".summary").innerHTML = `
        <br>
        <h2>Order Summary:</h2>
        <hr>
        <p>Name: ${event.target.elements.name.value}</p>
        <p>E-mail: ${event.target.elements.email.value}</p>
        <p>Phone Number: ${event.target.elements.phone.value}</p>
        <p>Chosen Fruits: ${allMarkedCheckboxes}</p>
        <p>Special Instructions: ${event.target.elements.message.value}</p>
        <br>
        <h2>Nutritional Information</h2>
        <hr>
        <p>Carbohydrates: ${totalCarbohydrate.toFixed(2)}</p>
        <p>Protein: ${totalProtein.toFixed(2)}</p>
        <p>Fat: ${totalFat.toFixed(2)}</p>
        <p>Sugar: ${totalSugar.toFixed(2)}</p>
        <p>Calories: ${totalCalories.toFixed(2)}</p>
        <br>
        <p>Order Date: ${orderDate}</p>
           `;
  document.querySelector(".summary").style.display = "block";
}
