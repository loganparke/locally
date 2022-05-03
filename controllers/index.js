const router = require("express").Router();
const apiRoutes = require("./api");
const homeRoutes = require("./home-routes.js");
const categoryRoutes = require("./category-routes");
const userRoutes = require("./user-routes")
const businessRoutes = require("./business-routes");

router.use("/", homeRoutes);
router.use("/user", userRoutes);
router.use("/category", categoryRoutes);
router.use("/business", businessRoutes);
router.use("/api", apiRoutes);

module.exports = router;
