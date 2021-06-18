/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/DOM.js":
/*!********************!*\
  !*** ./src/DOM.js ***!
  \********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"createE\": () => (/* binding */ createE),\n/* harmony export */   \"createHeader\": () => (/* binding */ createHeader),\n/* harmony export */   \"createToggleButton\": () => (/* binding */ createToggleButton),\n/* harmony export */   \"createSearchForm\": () => (/* binding */ createSearchForm),\n/* harmony export */   \"createMain\": () => (/* binding */ createMain),\n/* harmony export */   \"createWeatherMain\": () => (/* binding */ createWeatherMain),\n/* harmony export */   \"createFooter\": () => (/* binding */ createFooter)\n/* harmony export */ });\nconst createE = (elementName, content, className, href) => {\n    const element = document.createElement(elementName);\n    if (content) { element.innerHTML = content; }\n    if (className) { element.classList.toggle(className); }\n    if (href) { element.href = href; }\n    return element;\n};\n\nconst createToggleButton = () => {\n    const toggleGen = createE('div', false, 'toggle-gen');\n    const text = createE('span', 'Celsius / Fahrenheit', 'text');\n\n    const toggleContainer = createE(\"label\", false, 'switch');\n    const input = createE('input');\n    input.setAttribute('type', 'checkbox');\n    const span = createE('span', false, 'slider');\n    span.classList.add('round');\n\n    toggleContainer.appendChild(input);\n    toggleContainer.appendChild(span);\n    toggleGen.appendChild(text);\n    toggleGen.appendChild(toggleContainer);\n\n    return toggleGen;\n}\n\nfunction createHeader() {\n    const header = createE('header');\n    const headerContainer = createE('div', false, 'header-container');\n    const headerIcon = createE('i');\n    headerIcon.classList.add('fas');\n    headerIcon.classList.add('fa-cloud-sun');\n    const headerStick = createE('div', 'Travel Forecast -', 'h-stick-text');\n    const animatedHeader = createE('div', false, 'header-animation');\n    const headerTitle1 = createE('h1', '1 Choose your destination', 'swipe');\n    const headerTitle2 = createE('h1', '2 Check the weather and book flight', 'swipe');\n    const headerTitle3 = createE('h1', '3 Enjoy your trip!', 'swipe');\n    const headerTitle4 = createE('h1', ' ', 'swipe');\n  \n    headerContainer.appendChild(headerIcon);\n    headerContainer.appendChild(headerStick);\n    animatedHeader.appendChild(headerTitle1);\n    animatedHeader.appendChild(headerTitle2);\n    animatedHeader.appendChild(headerTitle3);\n    animatedHeader.appendChild(headerTitle4);\n    headerContainer.appendChild(animatedHeader);\n    header.appendChild(headerContainer);\n  \n    return header;\n}\n\nconst createSearchForm = () => {\n    const form = createE(\"form\", false, \"form\");\n    const search = createE(\"input\");\n    search.setAttribute('type', 'text');\n    search.setAttribute('id', 'cityName');\n    search.setAttribute('name', 'cityName');\n    search.setAttribute('placeholder', 'Enter city name');\n    search.setAttribute('autofocus', true);\n    const btn = createE(\"button\", \"Search\", \"search-btn\");\n\n    form.appendChild(search);\n    form.appendChild(btn);\n    return form;\n}\n\nconst createFooter = () => {\n    const footer = createE('footer');\n    const footerDiv = createE('div', 'Copyright © 2021 Sarvar Khalimov');\n    const linkIcon1 = createE('a', '', 'icon-link', 'https://github.com/SarvarKh');\n    linkIcon1.setAttribute('target', '_blank');\n    const icon1 = document.createElement('i');\n    icon1.classList.add('fab');\n    icon1.classList.add('fa-github');\n  \n    const linkIcon2 = createE('a', '', 'icon-link', 'https://www.linkedin.com/in/sarvar-khalimov/');\n    linkIcon2.setAttribute('target', '_blank');\n    const icon2 = document.createElement('i');\n    icon2.classList.add('fab');\n    icon2.classList.add('fa-linkedin');\n  \n    const linkIcon3 = createE('a', '', 'icon-link', 'https://sarvarkh.github.io/portfolio/');\n    linkIcon3.setAttribute('target', '_blank');\n    const icon3 = document.createElement('i');\n    icon3.classList.add('fas');\n    icon3.classList.add('fa-folder-open');\n  \n    linkIcon1.appendChild(icon1);\n    linkIcon2.appendChild(icon2);\n    linkIcon3.appendChild(icon3);\n    footerDiv.appendChild(linkIcon1);\n    footerDiv.appendChild(linkIcon2);\n    footerDiv.appendChild(linkIcon3);\n    footer.appendChild(footerDiv);\n  \n    return footer;\n}\n\nconst createMain = () => {\n    const main = createE('main');\n    document.querySelector('#content').appendChild(main);\n    return main;\n}\n\nconst createWeatherMain = (tempI, feels_likeI, pressureI, humidityI, cityNameI, iconI) => {\n    const generalCon1 = createE('div', false, 'general-conainer');\n    const generalCon2 = createE('div', false, 'general-conainer');\n    const generalCon3 = createE('div', false, 'general-conainer');\n    const generalCon4 = createE('div', false, 'general-conainer');\n    const generalCon5 = createE('div', false, 'general-conainer');\n\n    const generalConIcon1 = createE('img', false, 'weather-icon');\n    const iconURL = \"http://openweathermap.org/img/wn/\" + iconI + \"@2x.png\";\n    generalConIcon1.setAttribute('src', iconURL);\n    const generalConIcon2 = createE('i', false, 'fas');\n    generalConIcon2.classList.add('fa-temperature-low');  \n    const generalConIcon3 = createE('i', false, 'fas');\n    generalConIcon3.classList.add('fa-wind');\n    const generalConIcon4 = createE('i', false, 'fas');\n    generalConIcon4.classList.add('fa-cloud-showers-heavy');\n    const generalConIcon5 = createE('i', false, 'fas');\n    generalConIcon5.classList.add('fa-landmark');\n    \n\n    const con1 = createE('div', false, 'wheather-data-container');\n    const con2 = createE('div', false, 'wheather-data-container');\n    const con3 = createE('div', false, 'wheather-data-container');\n    const con4 = createE('div', false, 'wheather-data-container');\n    const con5 = createE('div', false, 'wheather-data-container');\n    \n    \n    const con1Content = createE('div', 'Temperature ');\n    const con2Content = createE('div', 'Feels like ');\n    const con3Content = createE('div', 'Wind speed ');\n    const con4Content = createE('div', 'Humidity ');\n    const con5Content = createE('div', 'City Name ');\n    \n    const result = createE('div', false, 'WeatherMain');\n    const temp = createE('div', false, 'wheather-data');\n    const feels_like = createE('div', false, 'wheather-data');\n    const pressure = createE('div', false, 'wheather-data');\n    const humidity = createE('div', false, 'wheather-data');\n    const cityName = createE('div', false, 'wheather-data');\n\n    temp.textContent = tempI + ' °C';\n    feels_like.textContent = feels_likeI + ' °C';\n    pressure.textContent = pressureI + ' km/h';\n    humidity.textContent = humidityI + ' %';\n    cityName.textContent = cityNameI;\n\n    con1.appendChild(con1Content);\n    con1.appendChild(temp);\n    con2.appendChild(con2Content);\n    con2.appendChild(feels_like);\n    con3.appendChild(con3Content);\n    con3.appendChild(pressure);\n    con4.appendChild(con4Content);\n    con4.appendChild(humidity);\n    con5.appendChild(con5Content);\n    con5.appendChild(cityName);\n\n    generalCon1.appendChild(generalConIcon1);\n    generalCon1.appendChild(con1);\n    generalCon2.appendChild(generalConIcon2);\n    generalCon2.appendChild(con2);\n    generalCon3.appendChild(generalConIcon3);\n    generalCon3.appendChild(con3);\n    generalCon4.appendChild(generalConIcon4);\n    generalCon4.appendChild(con4);\n    generalCon5.appendChild(generalConIcon5);\n    generalCon5.appendChild(con5);\n\n    result.appendChild(generalCon1);\n    result.appendChild(generalCon2);\n    result.appendChild(generalCon3);\n    result.appendChild(generalCon4);\n    result.appendChild(generalCon5);\n\n    document.querySelector('main').appendChild(result);\n}\n\n\n\n\n\n\n\n\n\n//# sourceURL=webpack://weather-app/./src/DOM.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _page_loader__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./page-loader */ \"./src/page-loader.js\");\n\n\ndocument.body.appendChild((0,_page_loader__WEBPACK_IMPORTED_MODULE_0__.default)());\n\n//# sourceURL=webpack://weather-app/./src/index.js?");

/***/ }),

/***/ "./src/logic.js":
/*!**********************!*\
  !*** ./src/logic.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"searchForCity\": () => (/* binding */ searchForCity)\n/* harmony export */ });\n/* harmony import */ var _DOM__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./DOM */ \"./src/DOM.js\");\n\n\nconst searchForCity = () => {\n    const searchBtn = document.querySelector('.search-btn');\n    \n    searchBtn.addEventListener('click', (e) => {\n        e.preventDefault();\n\n        const main = document.querySelector('main');\n        main.textContent = \"\";\n\n        const city = document.querySelector(\"#cityName\");\n        console.log(\"First: \", city.value);\n\n        fetch('https://api.openweathermap.org/data/2.5/weather?q='+city.value+'&units=metric&appid=af70403a19469e0639313b5afa57330b', {mode: 'cors'})\n            .then(response => response.json())\n            .then(data => {\n                console.log(data.weather[0].icon);\n                console.log(data);\n                (0,_DOM__WEBPACK_IMPORTED_MODULE_0__.createWeatherMain)(data.main['temp'], data.main['feels_like'], data.wind['speed'], data.main['humidity'], data.name, data.weather[0].icon);\n            })\n            .catch(err => console.log(\"Wrong city name\"))\n    })\n}\n\n\n\n//# sourceURL=webpack://weather-app/./src/logic.js?");

/***/ }),

/***/ "./src/page-loader.js":
/*!****************************!*\
  !*** ./src/page-loader.js ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _DOM__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./DOM */ \"./src/DOM.js\");\n/* harmony import */ var _logic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./logic */ \"./src/logic.js\");\n\n\n\n\n\n\n\n\nfunction start() {\n    const content = document.getElementById('content');\n    document.body.appendChild((0,_DOM__WEBPACK_IMPORTED_MODULE_0__.createToggleButton)());\n    content.appendChild((0,_DOM__WEBPACK_IMPORTED_MODULE_0__.createHeader)());\n    content.appendChild((0,_DOM__WEBPACK_IMPORTED_MODULE_0__.createSearchForm)());\n    content.appendChild((0,_DOM__WEBPACK_IMPORTED_MODULE_0__.createMain)());\n    (0,_logic__WEBPACK_IMPORTED_MODULE_1__.searchForCity)();\n    content.appendChild((0,_DOM__WEBPACK_IMPORTED_MODULE_0__.createFooter)());\n\n    return content\n}\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (start);\n\n//# sourceURL=webpack://weather-app/./src/page-loader.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;