const router = require("express").Router();
const { rmSync } = require("fs");
const { User, Business, Review, Catagory } = require("../../models");

router.get("/", (req, res) => {
  Review.findAll()
  .then(dbReviewData => res.json(dbReviewData))
  .catch(err => {
    console.log(err);
    res.status(500).json(err);
  })
});

router.get("/:id", (req, res) => {
  Review.findOne({
    where: {
      id: req.params.id
    },
    include: [
      {
        model: User
      },
      {
        model: Business
      }
    ]
  })
  .then(dbReviewData => res.json(dbReviewData))
  .catch(err => {
    console.log(err);
    res.status(500).json(err);
  })
});

router.post("/", (req, res) => {
  Review.create({
    review_text: req.body.review_text,
    stars: req.body.stars,
    user_id: req.session.user_id,
    business_id: req.body.business_id
  })
  .then(dbReviewData => res.json(dbReviewData))
  .catch(err => {
    console.log(err);
    res.status(400).json(err);
  });
});

router.put("/:id", (req, res) => {});

router.delete("/:id", (req, res) => {});

module.exports = router;
