const sequelize = require('../config/connection');
const { Review } = require('../models');

const reviewData = [
  {
    review_text: 'I love this restaurant!',
    stars: 5,
    user_id: 3,
    business_id: 1
  },
  {
    review_text: 'The food here is good',
    stars: 4,
    user_id: 2,
    business_id: 1
  },
  {
    review_text: 'I didnt like it.',
    stars: 1,
    user_id: 1,
    business_id: 1
  },
  {
    review_text: 'I changed my mind its ok',
    stars: 3,
    user_id: 1,
    business_id: 1
  }
];

const seedReviews = () => Review.bulkCreate(reviewData, {individualHooks: true});

module.exports = seedReviews;