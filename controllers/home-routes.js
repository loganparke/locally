const router = require('express').Router();
const { User, Business, Category, Review } = require('../models');

router.get('/', (req,res) => {
  console.log('======================');
  Category.findAll()
    .then(dbCategoryData => {
      const categories = dbCategoryData.map(category => category.get({ plain: true }))

      res.render('homepage', {
        categories
      });
    })
    .catch((err) => {
      console.log(err);
      res.status(500).json(err);
    });
});

router.get('/login', (req, res) => {
  res.render('login');
})

module.exports = router;