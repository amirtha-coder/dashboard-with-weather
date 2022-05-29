// Global Declarations
// my api key
const API_KEY = "12d95f7e12mshd5a9c017ef2a138p13e781jsn9da0c1e65010";
const recentCitiesContainer = $("#recent-cities");

const options = {
  method: "GET",
  url: "https://community-open-weather-map.p.rapidapi.com/weather",
  params: {
    q: "London,uk",
    lat: "0",
    lon: "0",
    callback: "test",
    id: "2172797",
    lang: "null",
    units: "imperial",
    mode: "xml",
  },
};

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

const handleRecentSearchClick = (event) => {
  // restrict click to only buttons
  const target = $(event.target);
  if (target.is("button")) {
    // get data-city attribute
    const cityName = target.attr("data-city");
    console.log(cityName);
  }
};

const renderCurrentWeather = (currentWeatherData) => {
  // render the current weather data and append to section
};

const renderForecastWeather = (forecastWeatherData) => {
  // render the forecast weather data and append each card to section
};

const renderWeatherData = (cityName) => {
  // use API to fetch current weather data
  const currentWeatherUrl = `https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=${API_KEY}`;

  // from the response cherry pick all the data you want to see in the current weather card

  // get the lat and lon from current weather data API response
  const forecastWeatherUrl = `https://api.openweathermap.org/data/2.5/onecall?lat=${lat}&lon=${lon}&exclude=current,minutely,hourly&units=metric&appid=${API_KEY}`;

  // render current weather data

  // render forecast weather data
};

const handleFormSubmit = () => {
  // get the city name from input
  // if city name is empty handle that
  // else render weather data
};

recentCitiesContainer.click(handleRecentSearchClick);
const onReady = () => {
  renderCities();
};

$(document).ready(onReady);
