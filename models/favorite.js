const mongoose = require('mongoose');

const { Schema } = mongoose;

const favoriteSchema = new Schema({
  trefle_id: String,
  user_name: {
    type: String,
  },
  ip: String,
  user_zip: String,
  date: { type: Date, default: Date.now },
});

const Favorite = mongoose.model('Favorite', favoriteSchema);

module.exports = Favorite;