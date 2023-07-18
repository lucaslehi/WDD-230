async function fetchWeatherData() {
  //const apiKey = "963d7f32a03636a9a8839c3dfd68cca5";
  //const city = "Carlsbad";
  const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=Carlsbad&appid=963d7f32a03636a9a8839c3dfd68cca5&units=imperial`;

  try {
    const response = await fetch(apiUrl);
    if (!response.ok) {
      throw new Error("Failed to fetch weather data.");
    }
    const data = await response.json();
    return data;
  } catch (error) {
    console.error(error);
  }
}

// Function to display current weather data on the weather card
function displayCurrentWeather(data) {
  const currentWeather = document.getElementById("currentWeather");
  const condition = data.weather[0].main;
  const emoji = getEmojiForCondition(condition);
  const temp = Math.round(data.main.temp);

  currentWeather.innerHTML = `
      <p> Temperature: ${temp} °F</p>
      <p>${emoji} ${data.weather[0].description}</p>
      <p> Humidity: ${data.main.humidity}%</p>
    `;
}

// Function to fetch 3-day forecast data from OpenWeatherMap API
async function fetchForecastData() {
  //const apiKey = "963d7f32a03636a9a8839c3dfd68cca5"; // Replace 'YOUR_API_KEY' with your actual API key
  //const city = "Carlsbad";
  const apiUrl = `https://api.openweathermap.org/data/2.5/forecast?q=Carlsbad&cnt=4&appid=963d7f32a03636a9a8839c3dfd68cca5&units=imperial`;

  try {
    const response = await fetch(apiUrl);
    if (!response.ok) {
      throw new Error("Failed to fetch forecast data.");
    }
    const data = await response.json();
    return data;
  } catch (error) {
    console.error(error);
  }
}

// Function to map weather conditions to emojis
function getEmojiForCondition(condition) {
  const emojiMap = {
    Clear: "☀️",
    Clouds: "☁️",
    Rain: "🌧️",
    Drizzle: "🌦️",
    Thunderstorm: "⛈️",
    Snow: "❄️",
    Mist: "🌫️",
    Smoke: "🌫️",
    Haze: "🌫️",
    Dust: "🌫️",
    Fog: "🌫️",
    Sand: "🌫️",
    Ash: "🌫️",
    Squall: "🌬️",
    Tornado: "🌪️",
  };

  return emojiMap[condition] || "❓";
}

// Function to get the day of the week in local time
function getLocalDay(timestamp) {
  const date = new Date(timestamp * 1000);
  const options = { weekday: "long" };
  return date.toLocaleDateString("en-US", options);
}

// Function to display 3-day forecast on the weather card
function displayForecast(data) {
  const forecast = document.getElementById("forecast");
  forecast.innerHTML = "<h3>3-Day Forecast</h3>";

  const today = new Date().getDay();
  const days = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];

  for (let i = 1; i <= 3; i++) {
    const date = new Date(data.list[i].dt * 1000);
    const dayIndex = (today + i) % 7; // Correctly calculates the next three days
    const day = days[dayIndex];

    const temp = Math.round(data.list[i].main.temp);
    const description = data.list[i].weather[0].description;
    const condition = data.list[i].weather[0].main;
    const emoji = getEmojiForCondition(condition);

    forecast.innerHTML += `<p>${emoji} ${day}: ${temp} °C, ${description}</p>`;
  }
}

// Main function to fetch and display weather data
async function getWeatherData() {
  const currentWeatherData = await fetchWeatherData();
  displayCurrentWeather(currentWeatherData);

  const forecastData = await fetchForecastData();
  displayForecast(forecastData);
}

getWeatherData();
