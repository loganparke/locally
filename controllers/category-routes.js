const router = require('express').Router();
const { User, Business, Category, Review } = require('../models');

router.get('/:id', (req, res) => {
  Category.findOne({
    where: {
      id: req.params.id
    },
    include: [
      {
        model: Business
      }
    ]
  })
  .then(dbCategoryData => {
    const categories = dbCategoryData.get({ plain: true })
    const business = categories.businesses;
    console.log(business);
      if (!dbCategoryData) {
        res.status(404).json({ message: "No categories found" });
        return;
      }
      res.render('category', {
        categories,
        business
      });
  })
  .catch(err => {
    console.log(err);
    res.status(500).json(err);
  });
})

module.exports = router;