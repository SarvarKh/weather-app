import { createWeatherMain } from './DOM';
import { createDefaultErrorReply } from './DOM';
import { fetchingMessage } from './DOM';

const searchForCity = () => {
    const form = document.querySelector('.form');
    
    form.addEventListener('submit', (e) => {
        e.preventDefault();

        const city = document.querySelector("#cityName");
        console.log("First: ", city.value);

        fetchingMessage(city.value);

        fetch('https://api.openweathermap.org/data/2.5/weather?q='+city.value+'&units=metric&appid=af70403a19469e0639313b5afa57330b', {mode: 'cors'})
            .then(response => response.json())
            .then(data => {
                console.log(data);
                createWeatherMain(data.main['temp'], data.main['feels_like'], data.wind['speed'], data.main['humidity'], data.name, data.weather[0].icon, data.sys['country']);
            })
            .catch(err => {
                createDefaultErrorReply();
            })
    })
}

export { searchForCity };