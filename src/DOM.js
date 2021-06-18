const createE = (elementName, content, className, href) => {
    const element = document.createElement(elementName);
    if (content) { element.innerHTML = content; }
    if (className) { element.classList.toggle(className); }
    if (href) { element.href = href; }
    return element;
};

const createToggleButton = () => {
    const toggleGen = createE('div', false, 'toggle-gen');
    const text = createE('span', 'Celsius / Fahrenheit', 'text');

    const toggleContainer = createE("label", false, 'switch');
    const input = createE('input');
    input.setAttribute('type', 'checkbox');
    const span = createE('span', false, 'slider');
    span.classList.add('round');

    toggleContainer.appendChild(input);
    toggleContainer.appendChild(span);
    toggleGen.appendChild(text);
    toggleGen.appendChild(toggleContainer);

    return toggleGen;
}

function createHeader() {
    const header = createE('header');
    const headerContainer = createE('div', false, 'header-container');
    const headerIcon = createE('i');
    headerIcon.classList.add('fas');
    headerIcon.classList.add('fa-cloud-sun');
    const headerStick = createE('div', 'Travel Forecast -', 'h-stick-text');
    const animatedHeader = createE('div', false, 'header-animation');
    const headerTitle1 = createE('h1', '1 Choose your destination', 'swipe');
    const headerTitle2 = createE('h1', '2 Check the weather and book flight', 'swipe');
    const headerTitle3 = createE('h1', '3 Enjoy your trip!', 'swipe');
    const headerTitle4 = createE('h1', ' ', 'swipe');
  
    headerContainer.appendChild(headerIcon);
    headerContainer.appendChild(headerStick);
    animatedHeader.appendChild(headerTitle1);
    animatedHeader.appendChild(headerTitle2);
    animatedHeader.appendChild(headerTitle3);
    animatedHeader.appendChild(headerTitle4);
    headerContainer.appendChild(animatedHeader);
    header.appendChild(headerContainer);
  
    return header;
}

const createSearchForm = () => {
    const form = createE("form", false, "form");
    const search = createE("input");
    search.setAttribute('type', 'text');
    search.setAttribute('id', 'cityName');
    search.setAttribute('name', 'cityName');
    search.setAttribute('placeholder', 'Enter city name');
    search.setAttribute('autofocus', true);
    const btn = createE("i", false, "search-btn");
    btn.classList.add('fas');
    btn.classList.add('fa-search');

    form.appendChild(search);
    form.appendChild(btn);
    return form;
}

const createFooter = () => {
    const footer = createE('footer');
    const footerDiv = createE('div', 'Copyright © 2021 Sarvar Khalimov');
    const linkIcon1 = createE('a', '', 'icon-link', 'https://github.com/SarvarKh');
    linkIcon1.setAttribute('target', '_blank');
    const icon1 = document.createElement('i');
    icon1.classList.add('fab');
    icon1.classList.add('fa-github');
  
    const linkIcon2 = createE('a', '', 'icon-link', 'https://www.linkedin.com/in/sarvar-khalimov/');
    linkIcon2.setAttribute('target', '_blank');
    const icon2 = document.createElement('i');
    icon2.classList.add('fab');
    icon2.classList.add('fa-linkedin');
  
    const linkIcon3 = createE('a', '', 'icon-link', 'https://sarvarkh.github.io/portfolio/');
    linkIcon3.setAttribute('target', '_blank');
    const icon3 = document.createElement('i');
    icon3.classList.add('fas');
    icon3.classList.add('fa-folder-open');
  
    linkIcon1.appendChild(icon1);
    linkIcon2.appendChild(icon2);
    linkIcon3.appendChild(icon3);
    footerDiv.appendChild(linkIcon1);
    footerDiv.appendChild(linkIcon2);
    footerDiv.appendChild(linkIcon3);
    footer.appendChild(footerDiv);
  
    return footer;
}

const createMain = () => {
    const main = createE('main');
    document.querySelector('#content').appendChild(main);
    return main;
}

const createWeatherMain = (tempI, feels_likeI, pressureI, humidityI, cityNameI, iconI, countryI) => {
    console.log(cityNameI, countryI);
    const generalCon1 = createE('div', false, 'general-conainer');
    const generalCon2 = createE('div', false, 'general-conainer');
    const generalCon3 = createE('div', false, 'general-conainer');
    const generalCon4 = createE('div', false, 'general-conainer');
    const generalCon5 = createE('div', false, 'general-conainer');

    const generalConIcon1 = createE('img', false, 'weather-icon');
    const iconURL = "http://openweathermap.org/img/wn/" + iconI + "@2x.png";
    generalConIcon1.setAttribute('src', iconURL);
    const generalConIcon2 = createE('i', false, 'fas');
    generalConIcon2.classList.add('fa-temperature-low');  
    const generalConIcon3 = createE('i', false, 'fas');
    generalConIcon3.classList.add('fa-wind');
    const generalConIcon4 = createE('i', false, 'fas');
    generalConIcon4.classList.add('fa-cloud-showers-heavy');
    const generalConIcon5 = createE('i', false, 'fas');
    generalConIcon5.classList.add('fa-landmark');
    

    const con1 = createE('div', false, 'wheather-data-container');
    const con2 = createE('div', false, 'wheather-data-container');
    const con3 = createE('div', false, 'wheather-data-container');
    const con4 = createE('div', false, 'wheather-data-container');
    const con5 = createE('div', false, 'wheather-data-container');
    
    
    const con1Content = createE('div', 'Temperature ');
    const con2Content = createE('div', 'Feels like ');
    const con3Content = createE('div', 'Wind speed ');
    const con4Content = createE('div', 'Humidity ');
    const con5Content = createE('div', 'Country, City ');
    
    const result = createE('div', false, 'WeatherMain');
    const temp = createE('div', false, 'wheather-data');
    const feels_like = createE('div', false, 'wheather-data');
    const pressure = createE('div', false, 'wheather-data');
    const humidity = createE('div', false, 'wheather-data');
    const cityName = createE('div', false, 'wheather-data');

    temp.textContent = tempI + ' °C';
    feels_like.textContent = feels_likeI + ' °C';
    pressure.textContent = pressureI + ' km/h';
    humidity.textContent = humidityI + ' %';
    cityName.textContent = (countryI + ", " + cityNameI);

    con1.appendChild(con1Content);
    con1.appendChild(temp);
    con2.appendChild(con2Content);
    con2.appendChild(feels_like);
    con3.appendChild(con3Content);
    con3.appendChild(pressure);
    con4.appendChild(con4Content);
    con4.appendChild(humidity);
    con5.appendChild(con5Content);
    con5.appendChild(cityName);

    generalCon1.appendChild(generalConIcon1);
    generalCon1.appendChild(con1);
    generalCon2.appendChild(generalConIcon2);
    generalCon2.appendChild(con2);
    generalCon3.appendChild(generalConIcon3);
    generalCon3.appendChild(con3);
    generalCon4.appendChild(generalConIcon4);
    generalCon4.appendChild(con4);
    generalCon5.appendChild(generalConIcon5);
    generalCon5.appendChild(con5);

    result.appendChild(generalCon1);
    result.appendChild(generalCon2);
    result.appendChild(generalCon3);
    result.appendChild(generalCon4);
    result.appendChild(generalCon5);

    document.querySelector('main').appendChild(result);
}

export { createE };
export { createHeader };
export { createToggleButton };
export { createSearchForm };
export { createMain };
export { createWeatherMain };
export { createFooter };