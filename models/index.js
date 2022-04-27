const User = require("./User");
const Business = require("./Business");
const Review = require("./Review");
const Category = require("./Category");

// add relationships between tables
User.hasMany(Review, {
  foreignKey: "user_id",
});

Review.belongsTo(User, {
  foreignKey: "user_id",
  onDelete: "SET NULL",
});

Category.hasMany(Business, {
  foreignKey: "category_id",
});

Business.belongsTo(Category, {
  foreignKey: "category_id",
});

Business.hasMany(Review, {
  foreignKey: "business_id",
});

Review.belongsTo(Business, {
  foreignKey: "business_id",
});

module.exports = { User, Business, Review, Category };
