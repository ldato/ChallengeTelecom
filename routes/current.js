const express = require('express');
const router = express.Router();
const {getLocation} = require('../middleware/getLocation');
const {weatherCurrent} = require('../controllers/currentController');

router.get('/:city?', getLocation, weatherCurrent);

module.exports = router;