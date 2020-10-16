/* eslint-disable no-unused-vars */
/* eslint-disable consistent-return */

const express = require('express');

const router = express.Router();
const passport = require('passport');
const Account = require('../models/account');

router.get('/register', function(req, res) {
  res.render('register', {});
});

router.post('/register', function(req, res, next) {
  console.log('registering user');
  Account.register(new Account({username: req.body.username}), req.body.password, function(err) {
    if (err) {
      console.log('error while user register!', err);
      return next(err);
    }

    console.log('user registered!');

    res.redirect('/');
  });
});


router.get('/login', function(req, res) {
  res.render('login', {user: req.user, message: 'error'});
});

router.post('/login', passport.authenticate('local', { failureRedirect: '/login'}), function(req, res) {
    res.redirect('/');
});

// Route for logging user out
router.get('/logout', (req, res) => {
  req.logout();
  res.redirect('/');
});

module.exports = router;
