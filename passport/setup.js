const passport = require('passport');
const LocalStrategy = require('passport-local').Strategy;

// https://www.npmjs.com/package/passport-local-mongoose

// requires the model with Passport-Local Mongoose plugged in
const User = require('../models/Users');
 
// use static authenticate method of model in LocalStrategy
passport.use(new LocalStrategy(User.authenticate()));
 
// use static serialize and deserialize of model for passport session support
passport.serializeUser(User.serializeUser());
passport.deserializeUser(User.deserializeUser());

module.exports = passport;

/* https://medium.com/swlh/set-up-an-express-js-app-with-passport-js-and-mongodb-for-password-authentication-6ea05d95335c */

// const bcrypt = require('bcryptjs');
// const passport = require('passport');
// const LocalStrategy = require('passport-local').Strategy;
// const User = require('../models/Users');

// passport.serializeUser((user, done) => {
//   done(null, user.id);
// });

// passport.deserializeUser((id, done) => {
//   User.findById(id, (err, user) => {
//     done(err, user);
//   });
// });

// // Local Strategy
// passport.use(
//   new LocalStrategy({ usernameField: 'email' }, (email, password, done) => {
//     // Match User
//     User.findOne({ email })
//       .then((user) => {
//         // Create new User
//         if (!user) {
//           const newUser = new User({ email, password });
//           // Hash password before saving in database
//           bcrypt.genSalt(10, (err, salt) => {
//             bcrypt.hash(newUser.password, salt, (hashErr, hash) => {
//               if (hashErr) throw hashErr;
//               newUser.password = hash;
//               newUser
//                 .save()
//                 .then((userResult) => done(null, userResult))
//                 .catch((newUserErr) => done(null, false, { message: newUserErr }));
//             });
//           });
//           // Return other user
//         } else {
//           // Match password
//           bcrypt.compare(password, user.password, (err, isMatch) => {
//             if (err) throw err;

//             if (isMatch) {
//               return done(null, user);
//             }
//             return done(null, false, { message: 'Wrong password' });
//           });
//         }
//       })
//       .catch((err) => done(null, false, { message: err }));
//   }),
// );

// module.exports = passport;
