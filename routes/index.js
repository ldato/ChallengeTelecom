const router = require('express').Router();
const locationRouter = require('./location');
const currentRouter = require('./current');



router.get('/', async (req, res) => {
    res.json({message: "Ruta Base"});
})

router.use('/location', locationRouter);
router.use('/current', currentRouter);

module.exports = router;