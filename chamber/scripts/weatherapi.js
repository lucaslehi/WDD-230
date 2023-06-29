const weatherEmoji = document.querySelector(".emoji");
const temperature = document.querySelector(".temp");
const cloudyText = document.querySelector(".cloudy");
const windSpeed = document.querySelector(".wspeed");
const windChill = document.querySelector(".wchill");

const url =
  "https://api.openweathermap.org/data/2.5/weather?q=Brasilia&units=metric&appid=963d7f32a03636a9a8839c3dfd68cca5";

async function apiFetch() {
  try {
    const response = await fetch(url);
    if (response.ok) {
      const data = await response.json();
      displayResults(data);
    } else {
      throw Error(await response.text());
    }
  } catch (error) {
    console.log(error);
  }
}

function displayResults(weatherData) {
  const temperatureCelsius = Math.round(weatherData.main.temp);
  const iconCode = weatherData.weather[0].icon;
  const description = weatherData.weather[0].description;
  const windSpeedValue = weatherData.wind.speed;

  weatherEmoji.textContent = getWeatherEmoji(iconCode);
  temperature.textContent = `${temperatureCelsius}°C`;
  cloudyText.textContent = description;
  windSpeed.textContent = `Wind speed: ${windSpeedValue} km/h`;

  let temperatureValue = parseFloat(temperatureCelsius);
  let windSpeedValueFloat = parseFloat(windSpeedValue);
  let windChillValue = calculateWindChill(
    temperatureValue,
    windSpeedValueFloat
  );
  windChill.textContent = `Wind Chill: ${windChillValue}°C`;
}

function calculateWindChill(temperature, windSpeed) {
  if (temperature <= 10 && windSpeed > 4.8) {
    const windChill =
      13.12 +
      0.6215 * temperature -
      11.37 * Math.pow(windSpeed, 0.16) +
      0.3965 * temperature * Math.pow(windSpeed, 0.16);
    return windChill.toFixed(2);
  } else {
    return "N/A";
  }
}

function getWeatherEmoji(iconCode) {
  if (iconCode.includes("01")) {
    return "☀️";
  } else if (iconCode.includes("02")) {
    return "⛅";
  } else if (iconCode.includes("03") || iconCode.includes("04")) {
    return "☁️";
  } else if (iconCode.includes("09") || iconCode.includes("10")) {
    return "🌧️";
  } else if (iconCode.includes("11")) {
    return "⛈️";
  } else if (iconCode.includes("13")) {
    return "❄️";
  } else if (iconCode.includes("50")) {
    return "🌫️";
  } else {
    return "";
  }
}

apiFetch();
