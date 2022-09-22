const { currentWeather } = require('../services/current');

const weatherCurrent = async (req, res) => {
    let { city } = req.params;
    let location = req.location;
   try {
    if (city === undefined) {
        const response = await currentWeather(location);
        const locationWeather = await response.json()
        return locationWeather;
    }    
    const response = await currentWeather(city);
        const cityWeather = await response.json()
        return cityWeather;
   } catch (error) {
    
   }
}

module.exports = {
    weatherCurrent
}