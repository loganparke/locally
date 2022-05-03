const router = require("express").Router();
const { User, Business, Review, Category } = require("../../models");

//Display businesses on homepage
router.get('/', async (req, res) => {
    try {
        const dbBusinessData = await Business.findAll({
              attributes: ['id','business_name','category_id','website','phone','address','mainPhoto','hours']
        });
    
        const businesses = dbBusinessData.map(business =>
          business.get({ plain: true })
        );
        res.render('business', {
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

router.post("/", async (req, res) => {
    Business.create({
      business_name: req.body.business_name,
      category_id: req.body.category_id,
      website: req.body.website,
      phone: req.body.phone,
      address: req.body.address,
      mainPhoto: req.body.mainPhoto,
    })
      .then((dbBusinessData) => res.json(dbBusinessData))
    .catch((err) => {
        console.log(err);
        res.status(500).json(err);
      });
  });

router.delete("/:id", async (req, res) => {
    try {
        const dbBusinessData = await Business.destroy({
          where: {
            id: req.params.id
          }
        });
    
        if (!dbBusinessData) {
          res.status(404).json({ message: 'No business found with that id!' });
          return;
        }
    
        res.status(200).json(dbBusinessData);
      } catch (err) {
        res.status(500).json(err);
      }
    });

module.exports = router;
