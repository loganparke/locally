const router = require("express").Router();
const { User, Business, Review, Category } = require("../../models");

router.get("/:id", async(req,res) => {
  Business.findOne({
    where: {
      id: req.params.id
    },
    include: [
      {
        model: Review
      }
    ]
  })
  .then(dbUserData => {
    if (!dbUserData) {
      res.status(404).json({ message: "No user found with this id" });
      return;
    }
    res.json(dbUserData);
  })
  .catch((err) => {
    console.log(err);
    res.status(500).json(err);
  });
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
