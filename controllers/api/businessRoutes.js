const router = require('express').Router();
const { User, Business, Review } = require('../../models');

//Display businesses on homepage
router.get('/', async (req, res) => {
    try {
        const dbBusinessData = await Business.findAll({
          include: [
            {
              model: Business,
              attributes: ['filename', 'description']
            }
          ]
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
router.get('/business/:id', async (req, res) => {
    try {
        const dbBusinessData = await Business.findByPk(req.params.id, {
          include: [
            {
              model: Business,
              attributes: [
                'id',
                'description'
              ]
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

router.post('/', (req, res) => {

});

router.put('/:id', (req, res) => {

});

router.delete('/:id', (req, res) => {

});

module.exports = router;