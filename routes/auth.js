/* eslint-disable no-unused-vars */
/* eslint-disable consistent-return */

const express = require('express');

const router = express.Router();
const passport = require('passport');
const { listIndexes } = require('../models/Users');

// Route for logging user out
router.get('/logout', (req, res) => {
  req.logOut();
  res.redirect('/');
});

// Route for getting some data about our user to be used client side
router.get('/user_data', (req, res) => {
  let ip = '';
  const ipAddr = req.headers['x-forwarded-for'];
  if (ipAddr) {
    const addrList = ipAddr.split(',');
    ip = addrList[addrList.length - 1];
  }
  if (!req.user) {
    // The user is not logged in, send back the ip address
    res.json({ ip });
  } else {
    // Otherwise send back the user's email and id
    // Sending back a password, even a hashed password, isn't a good idea
    res.json({
      email: req.user.email,
      ip,
    });
  }
});

router.post('/register', (req, res, next) => {
  passport.authenticate('local', (err, user, info) => {
    if (err) {
      return res.status(400).json({ errors: err });
    }
    if (!user) {
      return res.status(400).json({ errors: 'No user found' });
    }
    req.logIn(user, (logInErr) => {
      if (logInErr) {
        // this code runs if email is in database and password is wrong
        return res.status(400).json({ errors: "Couldn't login with this email. Please try again." });
      }
    
      return res.status(200).json({ email: user.email });
    });
    
  })(req, res, next);
});

router.post('/login', (req, res, next) => {
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
