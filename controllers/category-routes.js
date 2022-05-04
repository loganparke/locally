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

      if (!dbCategoryData) {
        res.status(404).json({ message: "No categories found" });
        return;
      }
      if(req.session.loggedIn) {
        res.render('category', {
          categories,
          business,
          loggedIn: req.session.loggedIn
        });
      } else {
        res.render('category', {
          categories,
          business
        });
      }

  })
  .catch(err => {
    console.log(err);
    res.status(500).json(err);
  });
})

module.exports = router;