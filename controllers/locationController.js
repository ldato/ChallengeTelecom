const { getMyLocation } = require('../middleware/getLocation');

const myLocation = async (req, res) => {
    const location = req.location;
    try {
        if (location.city) return res.status(200).json(location);
        if (location === null) return res.status(404).json("No es posible identificar su locación");
        
    } catch (error) {
        return res.status(404).json(error);
    }
}

module.exports = {
    myLocation
}