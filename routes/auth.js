const express = require("express");
const router = express.Router();
const passport = require("passport");

// Route for getting some data about our user to be used client side
router.get('/user_data', (req, res) => {
if (!req.user) {
    // The user is not logged in, send back an empty object
    res.json({});
} else {
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