const router = require("express").Router();
const bookRoutes = require("./books");
const plantRoutes = require("./plants")

// Book routes
router.use("/books", bookRoutes);
router.use("/plants", plantRoutes)
module.exports = router;
