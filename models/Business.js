const { Model, DataTypes } = require('sequelize');
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

    },
    catagory_id: {
      type: DataTypes.STRING,
      allowNull: false,
      references: {
        model: 'Catagory',
        key: 'id'
      }
    },
    website: {

    },
    phone: {

    },
    address: {

    },
    mainPhoto: {

    },
    hours: {

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