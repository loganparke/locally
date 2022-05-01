const router = require("express").Router();
const apiRoutes = require("./api");
const homeRoutes = require("./home-routes.js");
const categoryRoutes = require("./category-routes");

router.use("/", homeRoutes);
// router.use("/user", userRoutes);
router.use("/category", categoryRoutes);
router.use("/api", apiRoutes);

module.exports = router;
