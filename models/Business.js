const { Model, DataTypes, Sequelize } = require('sequelize');
const sequelize = require('../config/connection');

class Business extends Model {}

Business.init(
  {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    business_name: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    catagory_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'Catagory',
        key: 'id'
      }
    },
    website: {
      type: DataTypes.STRING,
      allowNull: false
    },
    phone: {
      type: DataTypes.STRING,
      allowNull: false
    },
    address: {
      type: DataTypes.STRING,
      allowNull: false
    },
    mainPhoto: {
      type: DataTypes.STRING,
      allowNull: false
    },
    hours: {
      type: Sequelize.json,
      allowNull: false
    }
  },
  {
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: 'business'
  }
)