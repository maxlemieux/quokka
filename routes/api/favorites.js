const router = require('express').Router();
const favoritesController = require('../../controllers/favoritesController');

// Matches with "/api/plants"
router.route('/')
  .get(favoritesController.findAll)
  .post(favoritesController.create);

// Matches with "/api/plants/:id"
router
  .route('/:id')
  .get(favoritesController.findById)
  .put(favoritesController.update)
  .delete(favoritesController.remove);

module.exports = router;
