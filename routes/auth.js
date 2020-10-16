/* eslint-disable no-unused-vars */
/* eslint-disable consistent-return */

const express = require('express');

const router = express.Router();
const passport = require('passport');
const User = require('../models/Users');


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

router.post('/register', function(req, res){
  console.log('registering user');
  Users=new User({email: req.body.email, username : req.body.username}); 
    User.register(Users, req.body.password, function(err, user) { 
      if (err) {
        console.log('error while user register!', err);
        return next(err);
      }
  
      console.log('user registered!');
  
      res.redirect('/');
    });
});

  

module.exports = router;
