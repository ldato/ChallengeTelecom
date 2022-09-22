const { getMyLocation, getMyIp } = require('../services/location');

const getLocation = async (req, res, next) => {
        const myIp = await getMyIp();
        if (myIp.ip) {
            const myLocation = await getMyLocation(myIp);
            const location = {
                lat: myLocation.lat,
                lon: myLocation.lon
            };
            req.location = myLocation;           
            next();
        } else {
           req.location = null;
           next();
        }   
}

module.exports = {
    getLocation
}