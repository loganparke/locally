const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class Catagory extends Model {} 

Catagory.init(
  {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    catagory_name: {
      type: DataTypes.STRING,
      allowNull: false,
    }
  },
  {
    sequelize,
    freezeTableName: true,
    underscored: true,
    modelName: 'catagory'
  }
);

module.exports = Catagory;
