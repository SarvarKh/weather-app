import { createWeatherMain } from './DOM';

const searchForCity = () => {
    const searchBtn = document.querySelector('.search-btn');
    
    searchBtn.addEventListener('click', (e) => {
        e.preventDefault();

        const main = document.querySelector('main');
        main.textContent = "";

        const city = document.querySelector("#cityName");
        console.log("First: ", city.value);

        fetch('https://api.openweathermap.org/data/2.5/weather?q='+city.value+'&units=metric&appid=af70403a19469e0639313b5afa57330b', {mode: 'cors'})
            .then(response => response.json())
            .then(data => {
                console.log(data.weather[0].icon);
                console.log(data);
                createWeatherMain(data.main['temp'], data.main['feels_like'], data.wind['speed'], data.main['humidity'], data.name, data.weather[0].icon);
            })
            .catch(err => console.log("Wrong city name"))
    })
}

export { searchForCity };