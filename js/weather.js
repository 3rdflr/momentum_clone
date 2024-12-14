const API_KEY = "a8efcf5040de1adf10a49df23a722bfa";

function onGeoOk(position) {
  const lat = position.coords.latitude;
  const lon = position.coords.longitude;
  const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}&units=metric`;
  fetch(url)
    .then((response) => response.json())
    .then((data) => {
      const weather = document.querySelector("#weather span:first-child");
      const temp = document.querySelector("#weather span:last-child");
      const city = document.querySelector("#city");
      city.innerText = data.name;
      temp.innerText = `${data.main.temp.toFixed(0)}°C`;

      if (data.weather[0].main === "Clouds") {
        weather.innerHTML = `<i class="fa-solid fa-cloud"></i>`;
      } else if (data.weather[0].main === "Clear") {
        weather.innerHTML = `<i class="fa-solid fa-sun"></i>`;
      } else if (data.weather[0].main === "Thunderstorm") {
        weather.innerHTML = `<i class="fa-solid fa-cloud-bolt"></i>`;
      } else if (data.weather[0].main === "Drizzle") {
        weather.innerHTML = `<i class="fa-solid fa-cloud-rain"></i>`;
      } else if (data.weather[0].main === "Rain") {
        weather.innerHTML = `<i class="fa-solid fa-cloud-showers-heavy"></i>`;
      } else if (data.weather[0].main === "Snow") {
        weather.innerHTML = `<i class="fa-solid fa-snowflake"></i>`;
      } else if (data.weather[0].main === "Atmosphere") {
        weather.innerHTML = `<i class="fa-solid fa-smog"></i>`;
      }
    });
}

function onGeoError() {
  alert("Can't find your location.");
}

navigator.geolocation.getCurrentPosition(onGeoOk, onGeoError);
