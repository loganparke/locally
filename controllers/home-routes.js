const router = require("express").Router();
const { User, Business, Category, Review } = require("../models");

router.get("/", (req, res) => {
  console.log("======================");
  Category.findAll()
    .then((dbCategoryData) => {
      const categories = dbCategoryData.map((category) =>
        category.get({ plain: true })
      );
      if (!dbCategoryData) {
        res.status(404).json({ message: "No categories found" });
        return;
      }
      if(req.session.loggedIn) {
      res.render("homepage", {
        categories,
        loggedIn: req.session.loggedIn
      });
      } else {
        res.render("homepage", {
          categories,
        });
      }
    })
    .catch((err) => {
      console.log(err);
      res.status(500).json(err);
    });
});

router.get("/login", (req, res) => {
  if (req.session.loggedIn) {
    res.redirect("/");
    return;
  }

  res.render("login");
});

module.exports = router;
