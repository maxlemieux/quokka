const router = require('express').Router();

const geoipRoutes = require('./geoip');
const plantRoutes = require('./plants');
const favoritesRoutes = require('./favorites');
const trefleRoutes = require('./trefle');
const phzmapiRoutes = require('./phzmapi');

router.use('/geoip', geoipRoutes);
router.use('/plants', plantRoutes);
router.use('/favorites', favoritesRoutes);
router.use('/trefle', trefleRoutes);
router.use('/phzmapi', phzmapiRoutes);

module.exports = router;
