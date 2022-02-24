function search(event) {
  event.preventDefault();
  let searchInput = document.querySelector("#search-text-input");
  console.log(searchInput.value);

  let apiKey = "64aa2c65e74fccc76a60f4f77191a7b1";
  let apiEndpoint = "https://api.openweathermap.org/data/2.5/weather";
  let apiUrl = `${apiEndpoint}?q=${searchInput.value}&units=metric&appid=${apiKey}`;

  console.log(apiUrl);
  axios.get(`${apiUrl}&appid=${apiKey}`).then(showTemperature);

  let h1 = document.querySelector("h1");
  if (searchInput.value) {
    searchInput.value =
      searchInput.value.charAt(0).toUpperCase() + searchInput.value.slice(1);
    h1.innerHTML = `Searching for ${searchInput.value} ... `;
  } else {
    alert("Please type in a city.");
  }
}

function showPosition(position) {
  let lat = position.coords.latitude;
  let lon = position.coords.longitude;
  let apiKey = "64aa2c65e74fccc76a60f4f77191a7b1";
  let apiEndpoint = "https://api.openweathermap.org/data/2.5/weather";
  let apiUrl = `${apiEndpoint}?lat=${lat}&lon=${lon}&units=metric&appid=${apiKey}`;

  console.log(apiUrl);
  axios.get(`${apiUrl}&appid=${apiKey}`).then(showTemperature);
}

navigator.geolocation.getCurrentPosition(showPosition);

function showTemperature(response) {
  console.log(response.data);
  let temperature = Math.round(response.data.main.temp);
  let degrees = document.querySelector(".temp");
  degrees.innerHTML = `${temperature}`;
}

let form = document.querySelector("#search-form");

form.addEventListener("submit", search);

let days = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
];

let months = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
];
let now = new Date();
let date = now.getDate();
let year = now.getFullYear();
let month = months[now.getMonth()];
let day = days[now.getDay()];
let hour = now.getHours();
if (hour < 10) {
  hour = `0${hour}`;
}
let minutes = now.getMinutes();
if (minutes < 10) {
  minutes = `0${minutes}`;
}
let currentDate = document.querySelector("h6");
currentDate.innerHTML = `${day}, ${month} ${date}th ${year} ||  ${hour}:${minutes}`;

function formatDate(day, month, date, year) {
  return new Date();
}
console.log(formatDate(new Date()));
