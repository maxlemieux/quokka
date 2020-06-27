const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const plantSchema = new Schema({
  trefle_id :String,
  common_name: String,
  scientific_name: { type: String, required: true },
  soils_adaptation: Object,
  images: Array,
  growth: Object,
  user_name: {
    type: String,
    unique: true
  },
  ip: String,
  date: { type: Date, default: Date.now },
});

const Plant = mongoose.model("Plant", plantSchema);

module.exports = Plant;
