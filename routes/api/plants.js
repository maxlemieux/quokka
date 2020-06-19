const axios = require("axios");
const router = require("express").Router();
const { getPlantsByImage, getPlantsByCommonName } = require("../../controllers/plantsController");

// // Matches with "/api/plants"
router.route("/")
  .get(getPlantsByImage);

router.route("/species/:commonName")
  .get(getPlantsByCommonName);

module.exports = router;