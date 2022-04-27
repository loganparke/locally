const sequelize = require('../config/connection');
const { Catagory } = require('../models');

const catagoryData = [
  {
    catagory_name: 'restaurant'
  },
  {
    catagory_name: 'landscaping'
  },
  {
    catagory_name: 'plumber'
  }
]

const seedCatagories = () => Catagory.bulkCreate(catagoryData, {individualHooks: true});

module.exports = seedCatagories;