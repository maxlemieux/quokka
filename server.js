const express = require("express");
const session = require('express-session');
const MongoStore = require('connect-mongo')(session);
const mongoose = require("mongoose");

const passport = require('./passport/setup');
const auth = require('./routes/auth');

const routes = require("./routes");

const app = express();
const PORT = process.env.PORT || 3001;
const MONGO_URI = 'mongodb://127.0.0.1:27017/quokka';

mongoose
  .connect(MONGO_URI, { useNewUrlParser: true })
  .then(console.log(`MongoDB connected ${MONGO_URI}`))
  .catch(err => console.log(err));


// Define middleware here
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use(
  session({
    secret: 'super duper ultra secret',
    resave: false,
    saveUninitialized: true,
    store: new MongoStore({ mongooseConnection: mongoose.connection })
  })
);

// Serve up static assets (usually on heroku)
if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));
}
// Add routes, both API and view
app.use(routes);

app.use('/api/auth', auth);
app.use(passport.session());


// Connect to the Mongo DB
// mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/quokka");

// Start the API server
app.listen(PORT, function() {
  console.log(`🌎  ==> API Server now listening on PORT ${PORT}!`);
});
