const db = require("../models");

// Defining methods for the plantsController
module.exports = {
  findAll: function(req, res) {
    if (req.user) {
      console.log(req.user)
      db.Plant
        .find({ user_name: req.user.email })
        .sort({ date: 1 })
        .then(dbModel => res.json(dbModel))
        .catch(err => res.status(422).json(err));
    } else {
      console.log(req.user)
      console.log(req.ip)
      // It's a guest, filter by IP instead of user
      db.Plant
        .find({ ip: req.ip, user_name: 'guest' })
        .sort({ date: 1 })
        .then(dbModel => res.json(dbModel))
        .catch(err => res.status(422).json(err));
    }
  },
  findRecent: function(req, res) {
    db.Plant
      .find(req.query)
      .sort({ date: -1 })
      .limit(10)
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },
  findById: function(req, res) {
    db.Plant
      .findById(req.params.id)
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },
  create: function(req, res) {
    db.Plant
      .create(req.body)
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },
  update: function(req, res) {
    db.Plant
      .findOneAndUpdate({ _id: req.params.id }, req.body)
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },
  remove: function(req, res) {
    db.Plant
      .findById({ _id: req.params.id })
      .then(dbModel => dbModel.remove())
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  }
};
