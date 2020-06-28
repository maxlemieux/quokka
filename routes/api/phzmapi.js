const axios = require('axios');
const router = require('express').Router();

router.route('/:zipcode')
  .get((req, res) => {
    const { zipcode } = req.params;
    axios.get(`https://phzmapi.org/${zipcode}.json`)
      .then((response) => {
        res.json(response.data);
      })
      .catch((err) => {
        console.log(`backend axios error getting phzmapi data on zipcode ${zipcode}`);
        res.status(err.response.status).send(err.response.statusText);
      });
  });

module.exports = router;
