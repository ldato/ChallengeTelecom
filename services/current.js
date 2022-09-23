const fetch = require('node-fetch');
const text = "No se encontro la ciudad";

const currentWeather = async (data) => {

    const responseMyLocation = await fetch(`https://api.openweathermap.org/data/2.5/weather?appid=${process.env.API_KEY1}&units=metric&lang=es&lat=${data.lat}&lon=${data.lon}`);
    const response = await responseMyLocation.json();
    return response;    
}

const currentWeatherCity = async (data) => {

    const responseCity = await fetch(`http://api.openweathermap.org/geo/1.0/direct?q=${data}&limit=5&appid=${process.env.API_KEY1}`);
    const response = await responseCity.json();

    if (response[0].name === data) {
        const responseCurrentCity = await fetch(`https://api.openweathermap.org/data/2.5/weather?appid=${process.env.API_KEY1}&units=metric&lang=es&lat=${response[0].lat}&lon=${response[0].lon}`);
        const cityWeather = await responseCurrentCity.json();
        return cityWeather;
    } else {
        return text;
    }
}

module.exports = {
    currentWeather,
    currentWeatherCity
}