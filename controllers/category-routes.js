const router = require('express').Router();
const { User, Business, Category, Review } = require('../models');

router.get('/:id', (req, res) => {
  Category.findOne({
    where: {
      id: req.params.id
    }
    
  })
  .then(dbCategoryData => {
    const categories = dbCategoryData.get({ plain: true })
      if (!dbCategoryData) {
        res.status(404).json({ message: "No categories found" });
        return;
      }
      res.render('category', {
        categories
      });
  })
  .catch(err => {
    console.log(err);
    res.status(500).json(err);
  });
})

module.exports = router;