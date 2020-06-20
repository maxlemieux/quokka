const axios = require("axios");
const router = require("express").Router();

router.route("/temperature_minimum_deg_f/:minTemp")
	.get(function(req, res) {
		// console.log(process.env.REACT_APP_TREFLE)
		axios.get(`https://trefle.io/api/species?token=${process.env.REACT_APP_TREFLE}&temperature_minimum_deg_f>${req.params.minTemp}`)
		.then(function(response) {
			res.json(response.data);
		})
		.catch(function(err) {
			console.log("backend axios error getting trefle data on min temp");
			res.status(err.response.status).send(err.response.statusText);
		})
	});

router.route("/common_name/:commonName")
	.get(function(req, res) {
		// console.log(req.params.commonName);
		axios.get(`https://trefle.io/api/species?token=${process.env.REACT_APP_TREFLE}&common_name=${req.params.commonName}`)
		.then(function(response) {
			res.json(response.data);
		})
		.catch(function(err) {
			console.log("backend axios error getting trefle data on common name");
			res.status(err.response.status).send(err.response.statusText);
		})
	});


module.exports = router;