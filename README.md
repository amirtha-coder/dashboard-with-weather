# dashboard-with-weather

API:

- What are the URLs and endpoints and params
- Does it have an API key
- weather data by city name
  https://api.openweathermap.org/data/2.5/weather?q=london&appid=8109f605d79877f7488a194794a29013
- forecast weather data
  https://api.openweathermap.org/data/2.5/onecall?lat=51.5085&lon=-0.1257&exclude=current,minutely,hourly&units=metric&appid=8109f605d79877f7488a194794a29013

Local Storage:

- Store recent cities

Form:

- Input to search for weather data by city name
- Submit button

https://openweathermap.org/weather-data

Current weather data

- lat
- lon
- City name
- Date (Friday, 6th May, 2022) (convert unix timestamp to date format using moment js)
- weather icon http://openweathermap.org/img/w/04d.png
- temperature (units=metric) degree celsius
- humidity (%)
- wind speed (m/s)
- UV index
  - colour coded to favourable, moderate, or severe
  - https://www.verywellhealth.com/know-your-uv-index-1069524

Future weather data (5 day forecast)

- Date (Friday, 6th May, 2022) (convert unix timestamp to date format using moment js)
- weather icon http://openweathermap.org/img/w/04d.png
- temperature (min and max or just max)
- humidity (%)
- wind speed (m/s)

When I click on recent city render all data with that city name
