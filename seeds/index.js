const seedUsers = require('./user-seeds');
const seedBusinesses = require('./business-seeds');
const seedReviews = require('./review-seeds');
const seedCatagories = require('./catagory-seeds');
const sequelize = require('../config/connection');

const seedAll = async () => {
  await sequelize.sync({ force: true });
  console.log('--------------');
  await seedUsers();
  console.log('--------------');
  await seedCatagories();
  console.log('--------------');

  await seedBusinesses();
  console.log('--------------');

  await seedReviews();
  console.log('--------------');

  process.exit(0);
};

seedAll();