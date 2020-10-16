/* eslint-disable global-require */

/*
  Loosely according to https://medium.com/swlh/set-up-an-express-js-app-with-passport-js-and-mongodb-for-password-authentication-6ea05d95335c
*/

if (process.env.NODE_ENV !== 'production') {
  require('dotenv').config();
}

const express = require('express');
const session = require('express-session');
const MongoStore = require('connect-mongo')(session);
const mongoose = require('mongoose');

// const passport = require('./passport/setup');

const routes = require('./routes');

const app = express();
const PORT = process.env.PORT || 3001;
const MONGO_URI = 'mongodb://127.0.0.1:27017/quokka';
const MONGO_OPTS = {
  useNewUrlParser: true,
  useUnifiedTopology: true,
};

mongoose
  .connect(process.env.MONGODB_URI || MONGO_URI, MONGO_OPTS)
  .then()
  .catch((err) => console.log(err));

// Define middleware here
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Express Session
app.use(
  session({
    secret: 'super duper ultra secret',
    resave: false,
    saveUninitialized: true,
    store: new MongoStore({ mongooseConnection: mongoose.connection }),
  }),
);

// Serve up static assets (usually on heroku)
if (process.env.NODE_ENV === 'production') {
  app.use(express.static('client/build'));
}

// app.use(passport.initialize());
// app.use(passport.session());

// Add routes, both API and view
app.use(routes);

// Start the API server
app.listen(PORT, () => {
  console.log(`🌎  ==> API Server now listening on PORT ${PORT}!`);
});
