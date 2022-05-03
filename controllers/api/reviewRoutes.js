const router = require("express").Router();
const { rmSync } = require("fs");
const { User, Business, Review, Catagory } = require("../../models");

// Get all reviews
router.get('/', async (req, res) => {
  try {
    // find all library reviews and perform a JOIN to include all associated Readers
    const reviewData = await Review.findAll({
      include: [{ model: Reader }]
    });
    res.status(200).json(reviewData);
  } catch (err) {
    res.status(500).json(err);
  }
});

// Get a single review
router.get('/:id', async (req, res) => {
  try {
    const reviewData = await Review.findByPk(req.params.id, {
      include: [{ model: Business }]
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

// Create a review
router.post('/', async (req, res) => {
  try {
    const businessData = await Review.create({
      user_id: req.body.user_id
    });
    res.status(200).json(businessData);
  } catch (err) {
    res.status(400).json(err);
  }
});

// Delete a review
router.delete('/:id', async (req, res) => {
  try {
    const reviewData = await Review.destroy({
      where: {
        id: req.params.id
      }
    });

    if (!reviewData) {
      res.status(404).json({ message: 'No review review found with that id!' });
      return;
    }

    res.status(200).json(reviewData);
  } catch (err) {
    res.status(500).json(err);
  }
});

module.exports = router;
