const router = require("express").Router();
const { User, Business, Review, Category } = require("../../models");

router.get("/", (req, res) => {
  Category.findAll({
    include: {
      model: Business,
      attributes: ["id", "business_name", "website", "phone", "address"],
    },
  })
    .then((dbCategoryData) => {
      if (!dbCategoryData) {
        res.status(404).json({ message: "No categories found" });
        return;
      }
      res.json(dbCategoryData);
    })
    .catch((err) => {
      console.log(err);
      res.status(500).json(err);
    });
});

router.get("/:id", (req, res) => {});

router.post("/", (req, res) => {});

router.put("/:id", (req, res) => {});

router.delete("/:id", (req, res) => {});

module.exports = router;
