const axios = require('axios');
const router = require('express').Router();

router.route('/species/:plantId')
  .get((req, res) => {
    axios.get(`http://localhost:3001/api/plants/${req.params.plantId}`)
      .then((response) => {
        console.log(`OK, we got a response on local lookup for this plant`)
        console.log(response)
      })
      .catch((err) => {
        console.log('backend axios error getting local plant data')
        console.log(err)
      });
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
    axios.get(`https://trefle.io/api/v1/species?token=${process.env.REACT_APP_TREFLE}&range[minimum_temperature_deg_f]=,${req.params.minTemp}`)
      .then((response) => {
        res.json(response.data.data);
      })
      .catch((err) => {
        console.log('backend axios error getting trefle data on min temp');
        res.status(err.response.status).send(err.response.statusText);
      });
  });

router.route('/distributions/:zoneId')
  .get((req, res) => {
    axios.get(`https://trefle.io/api/v1/distributions/${req.params.zoneId}/plants?token=${process.env.REACT_APP_TREFLE}`)
    .then((response) => {
      res.json(response.data);
    })
    .catch((err) => {
      console.log('backend axios error getting trefle data on tdwg zone ID');
      console.log(err.response)
      res.status(err.response.status).send(err.response.statusText);
    });
});

router.route('/name/:name')
  .get((req, res) => {
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
