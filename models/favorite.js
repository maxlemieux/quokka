const mongoose = require('mongoose');

const { Schema } = mongoose;

const schemaOptions = {
  toObject: {
    virtuals: true,
  },
  toJSON: {
    virtuals: true,
  },
};
const favoriteSchema = new Schema({
  trefle_id: String,
  user_name: {
    type: String,
  },
  ip: String,
  user_zip: String,
  date: { 
    type: Date, 
    default: Date.now 
  },
},schemaOptions);

favoriteSchema.virtual('plantInfo', {
  ref: 'Plant',
  localField: 'trefle_id',
  foreignField: 'trefle_id',
  justOne: true,
});

const Favorite = mongoose.model('Favorite', favoriteSchema);

module.exports = Favorite;