// eslint-disable-next-line import/no-cycle
import {
  createWeatherMain,
  createDefaultErrorReply,
  createAutoLocationErrorReply,
  fetchingMessage,
} from './DOM';

const fetchData = (city) => {
  fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=af70403a19469e0639313b5afa57330b`, { mode: 'cors' })
    .then((response) => response.json())
    .then((data) => {
      createWeatherMain(
        data.main.temp,
        data.main.feels_like,
        data.wind.speed,
        data.main.humidity,
        data.name,
        data.weather[0].icon,
        data.sys.country,
      );
    })
    .catch(() => {
      createDefaultErrorReply();
    });
};

const searchForCity = () => {
  const form = document.querySelector('.form');

  form.addEventListener('submit', (e) => {
    e.preventDefault();

    const city = document.querySelector('#cityName');
    fetchingMessage(city.value);

    fetchData(city.value);
  });
};

const getCityNameOnGeoLocation = (latitude, longitude) => {
  fetch(`https://api.openweathermap.org/geo/1.0/reverse?lat=${latitude}&lon=${longitude}&appid=17c75489c7d51e26cfe6254a64c6e232`)
    .then((response) => response.json())
    .then((data) => {
      fetchData(data[0].name);
    })
    .catch(() => {
      // eslint-disable-next-line no-undef
      createAutoLocationErrorReply(position.coords.latitude, position.coords.longitude);
    });
};

function showPosition(position) {
  getCityNameOnGeoLocation(position.coords.latitude, position.coords.longitude);
}

function getLocation() {
  const x = document.getElementById('autoLocationWeather');
  if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(showPosition);
  } else {
    x.innerHTML = 'Geolocation is not supported by this browser.';
  }
}

const checkGeoLocation = () => {
  const city = document.querySelector('#cityName');
  fetchingMessage('based on your geo-location');
  if (city.value === '') {
    getLocation();
  }
};

const celsiusToFahrenheit = (celsuis) => (celsuis * (9 / 5)) + 32;

const fahrenheitToCelsius = (fahrenheit) => (fahrenheit - 32) * (5 / 9);

export {
  searchForCity, celsiusToFahrenheit, fahrenheitToCelsius, checkGeoLocation,
};