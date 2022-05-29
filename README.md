# dashboard-with-weather

User Story
AS A traveler
I WANT to see the weather outlook for multiple cities
SO THAT I can plan a trip accordingly
Acceptance Criteria
GIVEN a weather dashboard with form inputs
WHEN I search for a city
THEN I am presented with current and future conditions for that city and that city is added to the search history
WHEN I view current weather conditions for that city
THEN I am presented with the city name, the date, an icon representation of weather conditions, the temperature, the humidity, the wind speed, and the UV index
WHEN I view the UV index
THEN I am presented with a color that indicates whether the conditions are favorable, moderate, or severe
WHEN I view future weather conditions for that city
THEN I am presented with a 5-day forecast that displays the date, an icon representation of weather conditions, the temperature, the wind speed, and the humidity
WHEN I click on a city in the search history
THEN I am again presented with current and future conditions for that city

API:

- What are the URLs and endpoints and params
- Does it have an API key
- my-API-key '12d95f7e12mshd5a9c017ef2a138p13e781jsn9da0c1e65010'
- weather data by city name
  https://api.openweathermap.org/data/2.5/weather?q=london&appid=4ed12bc6a3ff959aecde3577425b368e
- forecast weather data
  https://api.openweathermap.org/data/2.5/onecall?lat=51.5085&lon=-0.1257&exclude=current,minutely,hourly&units=metric&appid=4ed12bc6a3ff959aecde3577425b368e

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
