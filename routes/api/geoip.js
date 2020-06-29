const axios = require('axios');
const router = require('express').Router();
const maxmind = require('maxmind');

// const getPostalCode = (userIp) => {
//   maxmind.open('../../geoip/GeoLite2-City.mmdb').then((lookup) => {
//     console.log(lookup.get(userIp).postal.code);
//   })
// };

// getPostalCode('73.180.53.30');

router.route('/:ip')
  .get((req, res) => {
    const { ip } = req.params;
    maxmind.open('../../geoip/GeoLite2-City.mmdb')
      .then((lookup) => {
        res.json(lookup.get(ip).postal.code);
      })
      .catch((err) => {
        res.status(err.response.status).send(err.response.statusText);
      });
  });

module.exports = router;
