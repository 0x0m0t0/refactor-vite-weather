import Data from './config.js';
import createCards from './createcards.js';
import './style.scss';

const searchBar = document.getElementById('form');
const input = document.getElementById('searchBar');
const container = document.querySelector('.container');
const cityNameContainer = document.querySelector('.city-name');

searchBar.addEventListener('submit', (e) => {
  e.preventDefault();
  const thisCity = input.value.toLowerCase(); // Store target in variable test
  input.value = '';
  getLatLong(thisCity);
  cleanBeforeCreation();
});

const cleanBeforeCreation = () => {
  // Removing all child elements from Container before creating new set of elements
  while (container.firstChild) {
    container.removeChild(container.firstChild);
  }
};

const getLatLong = (thisCity) => {
  const apiUrl = `https://api.openweathermap.org/data/2.5/forecast/?q=${thisCity}&appid=${Data.key}`;
  fetch(apiUrl)
    .then((response) => response.json())
    .then((data) => {
      const lon = data.city.coord.lon;
      const lat = data.city.coord.lat;
      cityNameContainer.innerHTML = data.city.name;
      getWeatherData(lat, lon);
    })
    .catch((err) => console.log(err));
};

const weekLoop = (weatherData) => {
  const weekdays = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
  // Looping through 5 days of weather data
  for (let i = 0; i < 5; i++) {
    // Use the remainder operator (%) to switch from saturday (last in array) back to sunday (first in array)
    const date = new Date();
    let dayOfTheWeek = weekdays[(date.getDay() + i) % 7];
    const data = weatherData.list[i];
    createCards(data, dayOfTheWeek);
  }
};

const getWeatherData = (lat, lon) => {
  fetch(
    `https://api.openweathermap.org/data/2.5/forecast?lat=${lat}&lon=${lon}&cnt=5&units=metric&exclude=minutely,hourly,alerts&appid=${Data.key}`,
  )
    .then((response) => response.json())
    .then((weatherData) => {
      console.log(weatherData);
      console.log('Welcome to this supra basic weather app. This is an experiment.');
      weekLoop(weatherData);
    })
    .catch((err) => console.log(err, err));
};
