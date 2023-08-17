const apikey = "0bde84dc9ee486d46395d1f2835a979f";
const url = "https://api.openweathermap.org/data/2.5/weather?units=metric&q=";

let input = document.querySelector(".search");
const weatherIcon = document.querySelector(".weather-icon");

input.addEventListener("keypress", async (event) => {
  if (event.key == "Enter") {
    let city = input.value;
    input.value = "";
    checkWeather(city);
  }
});

async function checkWeather(city) {
  let resp = await fetch(url + city + `&appid=${apikey}`);
  let data = await resp.json();

  document.querySelector(".city").innerHTML = data.name;
  document.querySelector(".tempre").innerHTML =
  Math.round(data.main.temp) + "°c";
  document.querySelector(".humidity").innerHTML = data.main.humidity + "%";
  document.querySelector(".wind").innerHTML = data.wind.speed + "km/h";

  if (data.weather[0].main == "Clouds") {
    weatherIcon.src = "clouds.png";
  } else if (data.weather[0].main == "Rain") {
    weatherIcon.src = "rain.png";
  } else if (data.weather[0].main == "Drizzle") {
    weatherIcon.src = "drizzle.png";
  } else if (data.weather[0].main == "Mist") {
    weatherIcon.src = "mist.png";
  }
}
