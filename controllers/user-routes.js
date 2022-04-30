const router = require('express').Router();
const { User, Business, Category, Review } = require('../models');

router.get('/:id', (req, res) => {
  User.findOne({
    where: {
      id: req.params.id
    },
    include: [
      {
        model: Review, 
        attributes: ['id', 'review_text', 'stars'],
        include: {
          model: Business,
          attributes: ['business_name', 'id', 'mainPhoto']
        }
      }
    ]
  })
  .then(dbUserData => {
    const user = dbUserData.get({ plain: true })
    const reviews = user.reviews;
      if (!dbUserData) {
        res.status(404).json({ message: "No user found" });
        return;
      }
    const data =  {
        user,
        reviews: reviews
      }
      console.log(data);
      console.log(user);
      res.render('user', data);
  })
  .catch(err => {
    console.log(err);
    res.status(500).json(err);
  });
})

module.exports = router;