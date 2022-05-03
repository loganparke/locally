const router = require("express").Router();
const { User, Business, Review, Category } = require("../models");
const withAuth = require("../utils/auth");

//Display businesses on homepage
router.get('/', async (req, res) => {
  try {
      const dbBusinessData = await Business.findAll({
            attributes: ['id','business_name','category_id','website','phone','address','mainPhoto','hours']
      });
  
      const businesses = dbBusinessData.map(business =>
        business.get({ plain: true })
      );
      res.render('homepage', {
        businesses,
        loggedIn: req.session.loggedIn
      });
    } catch (err) {
      console.log(err);
      res.status(500).json(err);
    }
});

//Display a single business when selected
router.get('/:id', async (req, res) => {
  try {
      const dbBusinessData = await Business.findByPk(req.params.id, {

            attributes: ['id','business_name','category_id','website','phone','address','mainPhoto','hours'],
            include: [
              {
                model: Review,
                include: [
                  {
                    model: User
                  }     
                ]
              }
            ]

      });
      const business = dbBusinessData.get({ plain: true });
      const reviews = business.reviews;
      console.log(reviews);
      res.render('business', { business, reviews, loggedIn: req.session.loggedIn });
    } catch (err) {
      console.log(err);
      res.status(500).json(err);
    }
});

module.exports = router;