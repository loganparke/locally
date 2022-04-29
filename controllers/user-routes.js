const router = require('express').Router();
const { User, Business, Category, Review } = require('../models');

router.get('/:id', (req, res) => {
  User.findOne({
    where: {
      id: req.params.id
    }
    
  })
  .then(dbUserData => {
    const user = dbUserData.get({ plain: true })
      if (!dbUserData) {
        res.status(404).json({ message: "No user found" });
        return;
      }
      res.render('user', {
        user
      });
  })
  .catch(err => {
    console.log(err);
    res.status(500).json(err);
  });
})

module.exports = router;