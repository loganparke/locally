const User = require('./User');
const Business = require('./Business');
const Review = require('./Review');
const Catagory = require('./Catagory')

// add relationships between tables
User.hasMany(Review, {
  foreignKey: 'user-id'
});

Review.belongsTo(User, {
  foreignKey: 'user_id',
  onDelete: 'SET NULL'
});

Catagory.hasMany(Business, {
  foreignKey: 'catagory_id'
});

Business.belongsTo(Catagory, {
  foreignKey: 'catagory_id'
});

Business.hasMany(Review, {
  foreignKey: 'business_id'
});

Review.belongsTo(Business, {
  foreignKey: 'business_id'
});


module.exports = { User, Business, Review, Catagory };