// eslint-disable-next-line import/no-cycle
import { createWeatherMain, createDefaultErrorReply, fetchingMessage } from './DOM';

const searchForCity = () => {
  const form = document.querySelector('.form');

  form.addEventListener('submit', (e) => {
    e.preventDefault();

    const city = document.querySelector('#cityName');

    fetchingMessage(city.value);

    fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city.value}&units=metric&appid=af70403a19469e0639313b5afa57330b`, { mode: 'cors' })
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
  });
};

const celsiusToFahrenheit = (celsuis) => (celsuis * (9 / 5)) + 32;

const fahrenheitToCelsius = (fahrenheit) => (fahrenheit - 32) * (5 / 9);

export { searchForCity, celsiusToFahrenheit, fahrenheitToCelsius };