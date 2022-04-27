const sequelize = require("../config/connection");
const { Category } = require("../models");

const categoryData = [
  {
    category_name: "restaurant",
  },
  {
    category_name: "landscaping",
  },
  {
    category_name: "plumber",
  },
];

const seedCategories = () =>
  Category.bulkCreate(categoryData, { individualHooks: true });

module.exports = seedCategories;
