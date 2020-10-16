/* https://medium.com/swlh/set-up-an-express-js-app-with-passport-js-and-mongodb-for-password-authentication-6ea05d95335c */
// superceded by passport-local-mongoose from docs at
// https://www.npmjs.com/package/passport-local-mongoose

const mongoose = require('mongoose');
var Schema = mongoose.Schema; 
const passportLocalMongoose = require('passport-local-mongoose');

var UserSchema = new Schema({
    email: {type: String, required:true, unique:true}, 
    username : {type: String, unique: true, required:true}, 
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

UserSchema.plugin(passportLocalMongoose);

module.exports = mongoose.model('User', UserSchema);