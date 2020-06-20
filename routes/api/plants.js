const axios = require("axios");
const router = require("express").Router();
const { getPlantsByImage, getPlantsByName } = require("../../controllers/plantsController");

// // Matches with "/api/plants"
router.route("/")
  .get(getPlantsByImage);

router.route("/species/:name")
  .get(getPlantsByName);

module.exports = router;