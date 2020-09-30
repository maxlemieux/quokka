const db = require('../models');

// Defining methods for the pfavoritesController
module.exports = {
  findAll(req, res) {
    if (req.user) {
      db.Favorite
        .find({ user_name: req.user.email })
        .sort({ date: 1 })
        .then((dbModel) => {
          let favoritesList= dbModel
          for(var i=0; i<favoritesList.length; i++ ){
            db.Plant
              .find({trefle_id : favoritesList[i].trefle_id})
              .then((plantModel) => {
                //console.log(plantModel)
                favoritesList[i].plant_data=plantModel  
              })
          }
          console.log("------------------------------------------------------")
          res.json(favoritesList)
          console.log(favoritesList)
        })
        .catch((err) => res.status(422).json(err));
    } else {
      let ip = '';
      const ipAddr = req.headers['x-forwarded-for'];
      if (ipAddr) {
        const addrList = ipAddr.split(',');
        ip = addrList[addrList.length - 1];
      }
      // It's a guest, filter by IP instead of user
      db.Favorite
        .find({ ip, user_name: 'guest' })
        .sort({ date: 1 })
        .then((dbModel) => res.json(dbModel))
        .catch((err) => res.status(422).json(err));
    }
  },
  findRecent(req, res) {
    db.Favorite
      .find(req.query)
      .sort({ date: -1 })
      .limit(10)
      .then((dbModel) => res.json(dbModel))
      .catch((err) => res.status(422).json(err));
  },
  findById(req, res) {
    if (req.user) {
      db.Favorite
        .find({
          user_name: req.user.email,
          trefle_id: req.params.id,
        })
        .then((dbModel) => {
          if (dbModel[0]) {
            res.json({ exists: true });
          } else {
            res.json({ exists: false });
          }
        });
      // .catch(err => res.status(422).json({ exists: false }));
    } else {
      let ip = '';
      const ipAddr = req.headers['x-forwarded-for'];
      if (ipAddr) {
        const addrList = ipAddr.split(',');
        ip = addrList[addrList.length - 1];
      }
      db.Favorite
        .find({
          ip,
          user_name: 'guest',
          trefle_id: req.params.id,
        })
        .then((dbModel) => {
          if (dbModel[0]) {
            res.json({ exists: true });
          } else {
            res.json({ exists: false });
          }
        });
      // .catch(err => res.status(422).json({ exists: false }));
    }
  },
  create(req, res) {
    //console.log('create called with request body' + req.body)
    db.Favorite
      .create(req.body)
      .then((dbModel) => res.json(dbModel))
      .catch((err) => res.status(422).json(err));
  },
  update(req, res) {
    db.Favorite
      .findOneAndUpdate({ _id: req.params.id }, req.body)
      .then((dbModel) => res.json(dbModel))
      .catch((err) => res.status(422).json(err));
  },
  remove(req, res) {
    db.Favorite
      .findById({ _id: req.params.id })
      .then((dbModel) => dbModel.remove())
      .then((dbModel) => res.json(dbModel))
      .catch((err) => res.status(422).json(err));
  },
};
