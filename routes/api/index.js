const router = require("express").Router();
const bookRoutes = require("./books");
const plantRoutes = require("./plants")
const trefleRoutes = require("./trefle")
const axios = require("axios");

// Book routes
router.use("/books", bookRoutes);
router.use("/plants", plantRoutes);
router.use("/trefle", trefleRoutes);

router.route("/trefle/species/:id")
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

module.exports = router;