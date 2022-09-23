const express = require('express');
const router = express.Router();

router.get('/:city?', (req, res) => {
    console.log("Ruta Forecast");
})

module.exports = router;