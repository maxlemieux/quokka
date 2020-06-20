const router = require("express").Router();
const bookRoutes = require("./books");
const plantRoutes = require("./plants");
const trefleRoutes = require("./trefle");
const phzmapiRoutes = require("./phzmapi");
const axios = require("axios");

// Book routes
router.use("/books", bookRoutes);
router.use("/plants", plantRoutes);
router.use("/trefle", trefleRoutes);
router.use("/phzmapi", phzmapiRoutes);

module.exports = router;