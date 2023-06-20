function calculateWindChill(temperature, windSpeed) {
  if (temperature <= 10 && windSpeed > 4.8) {
    var windChill =
      13.12 +
      0.6215 * temperature -
      11.37 * Math.pow(windSpeed, 0.16) +
      0.3965 * temperature * Math.pow(windSpeed, 0.16);
    return windChill.toFixed(2);
  } else {
    return "N/A";
  }
}

let temperatureElement = document.querySelector(".temp");
let windSpeedElement = document.querySelector(".wspeed");
let windChillElement = document.querySelector(".wchill");

let temperatureText = temperatureElement.textContent;
let temperature = parseFloat(temperatureText.match(/\d+/)[0]);
let windSpeedText = windSpeedElement.textContent;
let windSpeed = parseFloat(windSpeedText.match(/\d+/)[0]);

let windChill = calculateWindChill(temperature, windSpeed);

windChillElement.textContent = "Wind Chill: " + windChill + "°C";
