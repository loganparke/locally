const router = require("express").Router();

const userRoutes = require("./userRoutes");
const businessRoutes = require("./businessRoutes");
const reviewRoutes = require("./reviewRoutes");
const categoryRoutes = require("./categoryRoutes");
router.use("/users", userRoutes);
router.use("/businesses", businessRoutes);
router.use("/review", reviewRoutes);
router.use("/category", categoryRoutes);

module.exports = router;
