const router = require('express').Router();
const favoritesController = require('../../controllers/favoritesController');

// Matches with "/api/favorites"
router.route('/')
  .get(favoritesController.findAll)
  .post(favoritesController.create);

// Matches with "/api/favorites/recent"
router.route('/recent')
  .get(favoritesController.findRecent);

// Matches with "/api/favorites/:id"
router
  .route('/:id')
  .get(favoritesController.findById)
  .put(favoritesController.update)
  .delete(favoritesController.remove);

module.exports = router;
