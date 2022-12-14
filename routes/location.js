const express = require('express');
const router = express.Router();
const {getLocation} = require('../middleware/getLocation');
const {myLocation} = require('../controllers/locationController')

router.get('/', getLocation, myLocation);

module.exports = router;