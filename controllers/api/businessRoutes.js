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
router.get('/business/:id', async (req, res) => {
    try {
        const dbBusinessData = await Business.findByPk(req.params.id, {
          include: [
            {
              model: Business,
              attributes: ['id','business_name','category_id','website','phone','address','mainPhoto','hours']
            }
          ]
        });
    
        const business = dbBusinessData.get({ plain: true });
        res.render('business', { business, loggedIn: req.session.loggedIn });
      } catch (err) {
        console.log(err);
        res.status(500).json(err);
      }
});

router.post("/", async (req, res) => {
    Business.create({
      business_name: req.body.business_name,
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
