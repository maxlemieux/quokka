const mongoose = require('mongoose');

const { Schema } = mongoose;

const plantSchema = new Schema({
  trefle_id: String,
  common_name: String,
  slug : String,
  scientific_name: { type: String, required: true },
  main_species_id: String,
  image_url: String,
  year: String,
  bibliography: String,
  author: String,
  family_common_name: String,
  genus_id: String,
  observation: String,
  vegetable: Boolean,
  links: Object,
  main_species: Object,
  genus: Object,
  family: Object, 
  species: Object, 
  subspecies: Array, 
  varieties: Array, 
  hybrids: Array, 
  forms: Array, 
  subvarieties: Array, 
  sources: Array, 
  // soils_adaptation: Object,
  images: Array,
  // growth: Object,
  date: { type: Date, default: Date.now },
});

const Plant = mongoose.model('Plant', plantSchema);

module.exports = Plant;
