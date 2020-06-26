const express = require("express");
const router = express.Router();
const passport = require("passport");

// Route for getting some data about our user to be used client side
router.get('/user_data', (req, res) => {
    // console.log('the request is')
    // console.log(req)
    if (!req.user) {
        // console.log(`We got a request for user data but the user wasn't logged in`)
        // The user is not logged in, send back an empty object
        res.json({});
    } else {
        // console.log(`We got a request for user data and the user is logged in, here is the req.user object`);
        // console.log(req.user);
        // Otherwise send back the user's email and id
        // Sending back a password, even a hashed password, isn't a good idea
        res.json({
            email: req.user.email
        });
    }
});


router.post("/register_login", (req, res, next) => {
    passport.authenticate("local", function(err, user, info) {
        if (err) {
            return res.status(400).json({ errors: err });
        }
        if (!user) {
            return res.status(400).json({ errors: "No user found" });
        }
        req.logIn(user, function(err) {
            if (err) {
                return res.status(400).json({ errors: err });
            }
            return res.status(200).json({ success: `logged in ${user.id}` });
        });
    })(req, res, next);
});

module.exports = router;