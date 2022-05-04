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


// Delete a review
router.delete('/:id', async (req, res) => {
  try {
    const reviewData = await Review.destroy({
      where: {
        id: req.params.user_id
      }
    });

    if (!reviewData) {
      res.status(404).json({ message: 'No review found with that id!' });
      return;
    }

    res.status(200).json(reviewData);
  } catch (err) {
    res.status(500).json(err);
  }
});

module.exports = router;
