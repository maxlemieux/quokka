const favoritesController = require('../controllers/favoritesController');
const plant = require('./plant');
const favorite = require('./favorite')
module.exports = {
  Plant: plant,
  Favorite: favorite,
};
