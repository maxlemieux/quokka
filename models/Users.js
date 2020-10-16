/* https://medium.com/swlh/set-up-an-express-js-app-with-passport-js-and-mongodb-for-password-authentication-6ea05d95335c */
// superceded by passport-local-mongoose from docs at
// https://www.npmjs.com/package/passport-local-mongoose

const mongoose = require('mongoose');
const passportLocalMongoose = require('passport-local-mongoose');

const User = new mongoose.Schema(
  {
    // email: {
    //   type: String,
    //   required: true,
    //   unique: true,
    // },
    // email_is_verified: {
    //   type: Boolean,
    //   default: false,
    // },
  },
  // { strict: false },
);

User.plugin(passportLocalMongoose);

module.exports = mongoose.model('User', User);