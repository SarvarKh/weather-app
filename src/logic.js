import { createCityWeather } from './DOM';

const searchForCity = () => {
    const searchBtn = document.querySelector('.search-btn');
    
    searchBtn.addEventListener('click', (e) => {
        e.preventDefault();
    
        const city = document.querySelector("#cityName");
        console.log("First: ", city.value);

        fetch('https://api.openweathermap.org/data/2.5/weather?q='+city.value+'&appid=af70403a19469e0639313b5afa57330b', {mode: 'cors'})
            .then(response => response.json())
            .then(data => {
                console.log("hehehey");
                createCityWeather(data.main['temp'], data.main['feels_like'], data.main['pressure']);
            })
            .catch(err => console.log("Wrong city name"))
    })
}

export { searchForCity };