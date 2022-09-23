const fetch = require('node-fetch');
const text = "No se encontro la ciudad";

const forecastWeather = async (data) => {
    console.log("Forecast Service");
    const responseMyLocation = await fetch(`https://api.openweathermap.org/data/2.5/forecast?lat=${data.lat}&lon=${data.lon}&appid=${process.env.API_KEY1}&&units=metric&lang=es`);
    const response = await responseMyLocation.json();
    //console.log(response);
    return response;
}

const forecastWeatherCity = async (data) => {
    const responseCity = await fetch(`http://api.openweathermap.org/geo/1.0/direct?q=${data}&limit=5&appid=${process.env.API_KEY1}`);
    const response = await responseCity.json();

    if (response[0].name === data) {
        const responseForecastCity = await fetch(`https://api.openweathermap.org/data/2.5/forecast?lat=${response[0].lat}&lon=${response[0].lon}&appid=${process.env.API_KEY1}&&units=metric&lang=es`);
        const cityForecast = await responseForecastCity.json();
        return cityForecast;
    } else {
        return text;
    }
}

module.exports = {
    forecastWeather,
    forecastWeatherCity
}