const {forecastWeather, forecastWeatherCity} = require('../services/forecast');

const forecastCurrent = async (req, res) => {
    let {city} = req.params;
    let location = req.location;
    try {
        if (city === undefined) {
            const response = await forecastWeather(location);
            return res.status(200).json(response);
        }
        const responseCity = await forecastWeatherCity(city);
        if (responseCity === "No se encontro la ciudad") {
            return res.status(404).json(responseCity);
        }

        return res.status(200).json(responseCity);
        
    } catch (error) {
        return res.status(400).json({
            message: "Ha ocurrido un error",
            errorDescription: error
        })
    }
}

module.exports = {
    forecastCurrent
}