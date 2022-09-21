const { getMyLocation, getMyIp } = require('../services/location');

const getLocation = async (req, res) => {
    try {
        const myIp = await getMyIp();
        if (myIp.ip) {
            const myLocation = await getMyLocation(myIp);
            return res.status(200).json(myLocation);
        } else {
            res.status(404).json("No es posible identificar su locación")
        }
    } catch (error) {
        return res.status(404).json(error);
    }
}

module.exports = {
    getLocation
}