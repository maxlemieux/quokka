/* https://medium.com/swlh/set-up-an-express-js-app-with-passport-js-and-mongodb-for-password-authentication-6ea05d95335c */

const mongoose = require('mongoose');

const UserSchema = new mongoose.Schema(
  {
    name: {
      type: String,
    },
    email: {
      type: String,
      required: true,
      unique: true,
    },
    email_is_verified: {
      type: Boolean,
      default: false,
    },
    password: {
      type: String,
    },
    date: {
      type: Date,
      default: Date.now,
    },
  },
  { strict: false },
);

const User = mongoose.model('users', UserSchema);
module.exports = User;
