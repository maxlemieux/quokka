/* eslint-disable no-unused-vars */
/* eslint-disable consistent-return */

const express = require('express');

const router = express.Router();
const passport = require('passport');

// Route for logging user out
router.get('/logout', (req, res) => {
  console.log('logout called');
  req.logOut();
  res.redirect('/');
});

// Route for getting some data about our user to be used client side
router.get('/user_data', (req, res) => {
  if (!req.user) {
    // The user is not logged in, send back the ip address
    res.json({ ip: req.ip });
  } else {
    // Otherwise send back the user's email and id
    // Sending back a password, even a hashed password, isn't a good idea
    res.json({
      email: req.user.email,
      ip: req.ip,
    });
  }
});

router.post('/register_login', (req, res, next) => {
  passport.authenticate('local', (err, user, info) => {
    if (err) {
      return res.status(400).json({ errors: err });
    }
    if (!user) {
      return res.status(400).json({ errors: 'No user found' });
    }
    req.logIn(user, (logInErr) => {
      if (logInErr) {
        return res.status(400).json({ errors: logInErr });
      }
      return res.status(200).json({ email: user.email });
    });
  })(req, res, next);
});

module.exports = router;
