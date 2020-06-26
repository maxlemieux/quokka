const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const plantSchema = new Schema({
  common_name: String,
  scientific_name: { type: String, required: true },
  soils_adaptation: Object,
  images: Array,
  growth: Object,
  user_name: String,
});

const Plant = mongoose.model("Plant", plantSchema);

module.exports = Plant;
