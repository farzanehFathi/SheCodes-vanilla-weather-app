function formatDate(timestamp) {
  let date = new Date(timestamp);
  let dayNumber = date.getDay();
  let hour = date.getHours();
  if (hour < 10) {
    hour = `0${hour}`;
  }
  let minute = date.getMinutes();
  if (minute < 10) {
    minute = `0${minute}`;
  }
  let weekDays = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Satuday",
  ];

  return `${weekDays[dayNumber]}. ${hour}:${minute}`;
}

function displaytemp(respond) {
  let iconCode = respond.data.weather[0].icon;
  let description = respond.data.weather[0].main;
  let iconUrl = `http://openweathermap.org/img/wn/${iconCode}@2x.png`;

  document.querySelector("#description").innerHTML = description;
  document.querySelector("#weather-icon").setAttribute("src", iconUrl);
  document.querySelector("#weather-icon").setAttribute("alt", description);
  document.querySelector("#temperature").innerHTML = Math.round(
    respond.data.main.temp
  );
  document.querySelector("#city-name").innerHTML = respond.data.name;

  document.querySelector("#feels-like").innerHTML = Math.round(
    respond.data.main.feels_like
  );
  document.querySelector("#humidity").innerHTML = Math.round(
    respond.data.main.humidity
  );
  document.querySelector("#wind-speed").innerHTML = Math.round(
    respond.data.wind.speed
  );

  document.querySelector("#date").innerHTML = formatDate(
    respond.data.dt * 1000
  );
}

function search(city) {
  let apiKey = "32e12816b7e874a17bd13105b642a985";
  let unit = "metric";
  let Url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=${unit}`;

  axios.get(Url).then(displaytemp);
}

function handleButton(event) {
  event.preventDefault();
  let cityInput = document.querySelector("#input-city").value;
  search(cityInput);
}
let form = document.querySelector("#search");
form.addEventListener("submit", handleButton);

search("London");
