const sequelize = require("../config/connection");
const { Category } = require("../models");

const categoryData = [
  {
    category_name: "restaurants",
  },
  {
    category_name: "landscapers",
  },
  {
    category_name: "plumbers",
  },
];

const seedCategories = () =>
  Category.bulkCreate(categoryData, { individualHooks: true });

module.exports = seedCategories;
