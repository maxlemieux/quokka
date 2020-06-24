const axios = require("axios");
const router = require("express").Router();

router.route("/species/:id")
	.get(function(req, res) {
		axios.get(`https://trefle.io/api/species/${req.params.id}?token=${process.env.REACT_APP_TREFLE}`)
		.then(function(response) {
			res.json(response.data);
		})
		.catch(function(err) {
			console.log("backend axios error getting trefle data");
			res.status(err.response.status).send(err.response.statusText);
		})
	});

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

router.route("/name/:name")
	.get(function(req, res) {
		console.log(req.params.name);
		axios.get(`https://trefle.io/api/species?token=${process.env.REACT_APP_TREFLE}&q=${req.params.name}`)
		.then(function(response) {
			res.json(response.data);
		})
		.catch(function(err) {
			console.log("backend axios error getting trefle data on name");
			res.status(err.response.status).send(err.response.statusText);
		})
	});


module.exports = router;