const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const plantSchema = new Schema({
  common_name: String,
  scientific_name: { type: String, required: true },
});

const Plant = mongoose.model("Plant", plantSchema);

module.exports = Plant;
