const express = require('express');
const router = express.Router();
const {getLocation} = require('../middleware/getLocation');
const {forecastCurrent} = require('../controllers/forecastController');

router.get('/:city?', getLocation, forecastCurrent);

module.exports = router;