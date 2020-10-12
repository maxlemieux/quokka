const db = require('../models');

// Defining methods for the plantsController
module.exports = {
  findAll(req, res) {
    db.Plant
      .find()
      .sort({ date: 1 })
      .then((dbModel) => res.json(dbModel))
      .catch((err) => res.status(422).json(err));
  },
  /* Not used anywhere but might be in future...ML */
  findRecent(req, res) {
    db.Plant
      .find(req.query)
      .sort({ date: -1 })
      .limit(10)
      .then((dbModel) => res.json(dbModel))
      .catch((err) => res.status(422).json(err));
  },
  findById(req, res) {
    db.Plant
      .find({
        trefle_id: req.params.id,
      })
      .then((dbModel) => {
        if (dbModel[0]) {
          // res.json({ exists: true });
          res.json(dbModel[0]);
        } else {
          res.json({ exists: false });
        }
      })
    .catch(err => res.status(422).json({ exists: false }));
  },
  create(req, res) {
    db.Plant
      .create(req.body)
      .then((dbModel) => res.json(dbModel))
      .catch((err) => res.status(422).json(err));
  },
  update(req, res) {
    db.Plant
      .findOneAndUpdate({ _id: req.params.id }, req.body)
      .then((dbModel) => res.json(dbModel))
      .catch((err) => res.status(422).json(err));
  },
  remove(req, res) {
    db.Plant
      .findById({ _id: req.params.id })
      .then((dbModel) => dbModel.remove())
      .then((dbModel) => res.json(dbModel))
      .catch((err) => res.status(422).json(err));
  },
};
