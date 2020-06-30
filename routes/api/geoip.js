const router = require('express').Router();
const maxmind = require('maxmind');

router.route('/:ip')
  .get((req, res) => {
    const { ip } = req.params;
    maxmind.open('./geoip/GeoLite2-City.mmdb')
      .then((lookup) => {
        res.json(lookup.get(ip));
      });
  });

module.exports = router;
