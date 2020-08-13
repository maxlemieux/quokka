const axios = require('axios');
const router = require('express').Router();

router.route('/species/:plantId')
  .get((req, res) => {
    // axios.get(`https://v0.trefle.io/api/species/${req.params.plantId}?token=${process.env.REACT_APP_TREFLE}`)
    axios.get(`https://trefle.io/api/v1/species/${req.params.plantId}?token=${process.env.REACT_APP_TREFLE}`)
      .then((response) => {
        res.json(response.data.data);
      })
      .catch((err) => {
        console.log('backend axios error getting trefle data');
        res.status(err.response.status).send(err.response.statusText);
      });
  });

router.route('/temperature_minimum_deg_f/:minTemp')
  .get((req, res) => {
    // axios.get(`https://v0.trefle.io/api/species?token=${process.env.REACT_APP_TREFLE}&temperature_minimum_deg_f>${req.params.minTemp}`)
    // https://trefle.io/api/v1/species?token=cHhTeGd4R21rUFc3b2tMK0x4bDNqQT09&range[minimum_temperature_deg_f]=,60
    axios.get(`https://trefle.io/api/v1/species?token=${process.env.REACT_APP_TREFLE}&range[minimum_temperature_deg_f]=,${req.params.minTemp}`)
      .then((response) => {
        res.json(response.data.data);
      })
      .catch((err) => {
        console.log('backend axios error getting trefle data on min temp');
        res.status(err.response.status).send(err.response.statusText);
      });
  });

router.route('/name/:name')
  .get((req, res) => {
    // axios.get(`https://v0.trefle.io/api/species?token=${process.env.REACT_APP_TREFLE}&q=${req.params.name}`)
    axios.get(`https://trefle.io/api/v1/plants/search?q=${req.params.name}&token=${process.env.REACT_APP_TREFLE}`)
      .then((response) => {
        res.json(response.data.data);
      })
      .catch((err) => {
        console.log('backend axios error getting trefle data on name');
        res.status(err.response.status).send(err.response.statusText);
      });
  });

module.exports = router;
