function displaytemp(respond) {
  document.querySelector("#temperature").innerHTML = Math.round(
    respond.data.main.temp
  );
  document.querySelector("#city-name").innerHTML = respond.data.name;

  document.querySelector("#description").innerHTML =
    respond.data.weather[0].main;

  document.querySelector("#feels-like").innerHTML = Math.round(
    respond.data.main.feels_like
  );
  document.querySelector("#humidity").innerHTML = Math.round(
    respond.data.main.humidity
  );
  document.querySelector("#wind-speed").innerHTML = Math.round(
    respond.data.wind.speed
  );

  console.log(respond.data);
}

let apiKey = "32e12816b7e874a17bd13105b642a985";
let city = "tehran";
let unit = "metric";
let Url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=${unit}`;

axios.get(Url).then(displaytemp);
