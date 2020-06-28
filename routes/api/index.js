const router = require('express').Router();

const plantRoutes = require('./plants');
const trefleRoutes = require('./trefle');
const phzmapiRoutes = require('./phzmapi');

router.use('/plants', plantRoutes);
router.use('/trefle', trefleRoutes);
router.use('/phzmapi', phzmapiRoutes);

module.exports = router;
