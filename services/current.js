const fetch = require('node-fetch');

const currentWeather = async (data) => {
    console.log(data);    
    const responseMyLocation = await fetch(`https://api.openweathermap.org/data/3.0/onecall?lat=${data.lat}&lon=${data.lon}&exclude={part}&appid=${process.env.API_KEY1}`);
    const response = await responseMyLocation.json();
    console.log(response);
    //return response;
}

module.exports = {
    currentWeather
}