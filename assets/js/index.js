// Global Declarations
// my api key
const apiKey = "4ed12bc6a3ff959aecde3577425b368e";
const recentCitiesContainer = $("#recent-cities");
const searchForm = $("#form-div");
const weatherInfoContainer = $("#weather-info-container");

const constructUrl = (baseUrl, params) => {
  const queryParams = new URLSearchParams(params).toString();

  return queryParams ? `${baseUrl}?${queryParams}` : baseUrl;
};

const fetchData = async (url, options = {}) => {
  try {
    const response = await fetch(url, options);

    if (response.ok) {
      const data = await response.json();
      return data;
    } else {
      throw new Error("Failed to fetch data");
    }
  } catch (error) {
    throw new Error(error.message);
  }
};

// read from local storage
const readFromLocalStorage = (key, defaultValue) => {
  // get from LS using key name
  const dataFromLS = localStorage.getItem(key);
  // parse data from LS
  const parsedData = JSON.parse(dataFromLS);
  if (parsedData) {
    return parsedData;
  } else {
    return defaultValue;
  }
};

// write to local storage
const writeToLocalStorage = (key, value) => {
  // convert value to string
  const stringifiedValue = JSON.stringify(value);
  // set stringified value to LS for key name
  localStorage.setItem(key, stringifiedValue);
};

const renderCurrentWeather = (data) => {
  const currentWeatherCard = `<div id="current-weather-data">
        <h2 id="title">${data.cityName}</h2>
        <p>
           Mon 6th June 2022
        </p>
        <img  src="http://openweathermap.org/img/wn/10d@2x.png" alt="">
        <ul>
          <li class="list current temp">  <i class="fa-solid fa-temperature-half my-1 fa-1x"></i>  : ${data.weatherData.current.temp} °C </li>
          <li class="list current temp">Wind  <i class="fa-solid fa-wind my-1 fa-1x"></i>  : ${data.weatherData.current.wind_speed} mph </li>
          <li class="list current temp">Humidity <i class="fa-solid fa-droplet my-1 fa-1x"></i> : ${data.weatherData.current.humidity} % </li>
          <li class="list current temp">UV index  <i class="fa-solid fa-cloud-sun my-1 fa-1x"></i>  : <span class="bg-success text-white px-3 rounded-2">  ${data.weatherData.current.uvi} </span></li>
        </ul>
    </div>`;
  weatherInfoContainer.append(currentWeatherCard);
  // render the current weather data and append to section
};

const renderForecastWeather = (forecastWeatherData) => {
  const forecastCards = `<div class="form-cards" id="form-cards">
          <div class="d-flex justify-content-between flex-wrap">
          
            <div class="card colour-forecast">
             <h3 id="title">Atlanta </h2>
              <p>
                Mon 6th June 2022
              </p>
              <span><img class= "today-img-icon" src="http://openweathermap.org/img/wn/10d@2x.png" alt=""></span> 
        <ul>
          <li class="list current temp">   <i class="fa-solid fa-temperature-half my-1 fa-1x"></i> 36</li>
          <li class="list current temp"> <i class="fa-solid fa-wind my-1 fa-1x"></i></li>
          <li class="list current temp"><i class="fa-solid fa-droplet my-1 fa-1x"></i></li>
          <li class="list current temp"><i class="fa-solid fa-cloud-sun my-1 fa-1x"></i> <span class="bg-success text-white px-3 rounded-2"> 10:00</span></li>
        </ul>
            </div>
             <div class="card colour-forecast">
             <h3 id="title">Atlanta </h2>
              <p>
                Mon 6th June 2022
              </p>
              <span><img class= "today-img-icon" src="http://openweathermap.org/img/wn/10d@2x.png" alt=""></span> 
        <ul>
          <li class="list current temp">   <i class="fa-solid fa-temperature-half my-1 fa-1x"></i> 36</li>
          <li class="list current temp"> <i class="fa-solid fa-wind my-1 fa-1x"></i></li>
          <li class="list current temp"><i class="fa-solid fa-droplet my-1 fa-1x"></i></li>
          <li class="list current temp"><i class="fa-solid fa-cloud-sun my-1 fa-1x"></i> <span class="bg-success text-white px-3 rounded-2"> 10:00</span></li>
        </ul>
            </div>
             <div class="card colour-forecast">
             <h3 id="title">Atlanta </h2>
              <p>
                Mon 6th June 2022
              </p>
              <span><img class= "today-img-icon" src="http://openweathermap.org/img/wn/10d@2x.png" alt=""></span> 
        <ul>
          <li class="list current temp">   <i class="fa-solid fa-temperature-half my-1 fa-1x"></i> 36</li>
          <li class="list current temp"> <i class="fa-solid fa-wind my-1 fa-1x"></i></li>
          <li class="list current temp"><i class="fa-solid fa-droplet my-1 fa-1x"></i></li>
          <li class="list current temp"><i class="fa-solid fa-cloud-sun my-1 fa-1x"></i> <span class="bg-success text-white px-3 rounded-2"> 10:00</span></li>
        </ul>
            </div>
             <div class="card colour-forecast">
             <h3 id="title">Atlanta </h2>
              <p>
                Mon 6th June 2022
              </p>
              <span><img class= "today-img-icon" src="http://openweathermap.org/img/wn/10d@2x.png" alt=""></span> 
        <ul>
          <li class="list current temp">   <i class="fa-solid fa-temperature-half my-1 fa-1x"></i> 36</li>
          <li class="list current temp"> <i class="fa-solid fa-wind my-1 fa-1x"></i></li>
          <li class="list current temp"><i class="fa-solid fa-droplet my-1 fa-1x"></i></li>
          <li class="list current temp"><i class="fa-solid fa-cloud-sun my-1 fa-1x"></i> <span class="bg-success text-white px-3 rounded-2"> 10:00</span></li>
        </ul>
            </div>
             <div class="card colour-forecast">
             <h3 id="title">Atlanta </h2>
              <p>
                Mon 6th June 2022
              </p>
              <span><img class= "today-img-icon" src="http://openweathermap.org/img/wn/10d@2x.png" alt=""></span> 
        <ul>
          <li class="list current temp">   <i class="fa-solid fa-temperature-half my-1 fa-1x"></i> 36</li>
          <li class="list current temp"> <i class="fa-solid fa-wind my-1 fa-1x"></i></li>
          <li class="list current temp"><i class="fa-solid fa-droplet my-1 fa-1x"></i></li>
          <li class="list current temp"><i class="fa-solid fa-cloud-sun my-1 fa-1x"></i> <span class="bg-success text-white px-3 rounded-2"> 10:00</span></li>
        </ul>
            </div>
          </div>
        </div>`;
  weatherInfoContainer.append(forecastCards);
  // render the forecast weather data and append each card to section
};
const renderCities = () => {
  // get recent cities from LS
  const recentCities = readFromLocalStorage("recentCities", []);
  console.log("ready");

  if (!recentCities.length) {
    const alert = `<div class="alert alert-primary d-flex align-items-center" id ="no-cities-alert"role="alert">
      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" class="bi bi-exclamation-triangle-fill flex-shrink-0 me-2" viewBox="0 0 16 16" role="img" aria-label="Warning:">
        <path d="M8.982 1.566a1.13 1.13 0 0 0-1.96 0L.165 13.233c-.457.778.091 1.767.98 1.767h13.713c.889 0 1.438-.99.98-1.767L8.982 1.566zM8 5c.535 0 .954.462.9.995l-.35 3.507a.552.552 0 0 1-1.1 0L7.1 5.995A.905.905 0 0 1 8 5zm.002 6a1 1 0 1 1 0 2 1 1 0 0 1 0-2z"/>
            </svg>
              <div>
    There are no recent explores of cities
    </div>
  </div>`;
    recentCitiesContainer.append(alert);
    // if empty show alert
  } else {
    const createRecentSearchCity = (city) => {
      return `<button type="button" class="btn btn-secondary btn-lg btn-block my-1" data-city="${city}">
          ${city}
          </button>`;
    };
    const recentSearches = recentCities.map(createRecentSearchCity).join("");
    // render recent cities
    recentCitiesContainer.append(recentSearches);
  }

  // add an event listener on div containing all cities
};

const renderWeatherData = async (cityName) => {
  const currentDataURL = constructUrl(
    "https://api.openweathermap.org/data/2.5/weather",
    {
      q: cityName,
      appid: "4ed12bc6a3ff959aecde3577425b368e",
    }
  );
  const currentData = await fetchData(currentDataURL);
  // get lat, lon and city name
  const lat = currentData?.coord?.lat;
  const lon = currentData?.coord?.lon;
  const displayCityName = currentData?.name;
  console.log(lat, lon, displayCityName);

  const forecastDataURL = constructUrl(
    "https://api.openweathermap.org/data/2.5/onecall",
    {
      lat: lat,
      lon: lon,
      exclude: "minutely,hourly",
      units: "metric",
      appid: "4ed12bc6a3ff959aecde3577425b368e",
    }
  );
  const forecastData = await fetchData(forecastDataURL);
  return {
    cityName: displayCityName,
    weatherData: forecastData,
  };
};

const handleFormSubmit = async (event) => {
  event.preventDefault();
  console.log("submit");
  // get the city name from input
  const cityName = $("#input-city").val();
  if (cityName) {
    const weatherData = await renderWeatherData(cityName);
    renderCurrentWeather(weatherData);
    renderForecastWeather(weatherData);
    const recentCities = readFromLocalStorage("recentCities", []);

    // else render weather data

    // fetch data from API
    // render current data
    // render forecast data

    // push city name to array
    recentCities.push(cityName);
    writeToLocalStorage("recentCities", recentCities);
    recentCitiesContainer.children().last().remove();
    // rerender recent cities
    renderCities();
  }
};
const handleRecentSearchClick = (event) => {
  // restrict click to only buttons
  const target = $(event.target);
  if (target.is("button")) {
    // get data-city attribute
    const cityName = target.attr("data-city");
    console.log(cityName);
  }
};
searchForm.submit(handleFormSubmit);
recentCitiesContainer.click(handleRecentSearchClick);
const onReady = () => {
  renderCities();
};

$(document).ready(onReady);
