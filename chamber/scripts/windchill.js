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

var temperatureElement = document.querySelector(".temp");
var windSpeedElement = document.querySelector(".wspeed");
var windChillElement = document.querySelector(".wchill");

var temperatureText = temperatureElement.textContent;
var temperature = parseFloat(temperatureText.match(/\d+/)[0]);
var windSpeedText = windSpeedElement.textContent;
var windSpeed = parseFloat(windSpeedText.match(/\d+/)[0]);

var windChill = calculateWindChill(temperature, windSpeed);

windChillElement.textContent = "Wind Chill: " + windChill + "°C";
