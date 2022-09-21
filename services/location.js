const fetch = require('node-fetch');


const getMyIp = async () => {
    const responseIp = await fetch('https://api.ipify.org?format=json');
    const ip = await responseIp.json();
    return ip;
}

const getMyLocation = async (ip) => {
   
    const responseLocation = await fetch(`http://ip-api.com/json/${ip.ip}`);
    const location = await responseLocation.json();
    return location;   
}

module.exports = {
    getMyLocation,
    getMyIp
}