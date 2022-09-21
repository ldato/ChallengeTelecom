const router = require('express').Router();
const locationRouter = require('./location');



router.get('/', async (req, res) => {
    res.json({message: "Ruta Base"});
})

router.use('/location', locationRouter);

module.exports = router;