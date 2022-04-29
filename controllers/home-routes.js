const router = require('express').Router();
const { User, Business, Category, Review } = require('../models');

router.get('/', (req,res) => {
  console.log('======================');
  Category.findAll()
    .then(dbCategoryData => {
      const categories = dbCategoryData.map(category => category.get({ plain: true }))
      if (!dbCategoryData) {
        res.status(404).json({ message: "No categories found" });
        return;
      }
      res.render('homepage', {
        categories
      });
    })
    .catch((err) => {
      console.log(err);
      res.status(500).json(err);
    });
});

module.exports = router;