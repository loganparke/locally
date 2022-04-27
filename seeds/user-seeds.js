const sequelize = require('../config/connection');
const { User } = require('../models');

const userdata = [
  {
    username: 'Logan',
    email: 'logan@gmail.com',
    password: '123'
  },
  {
    username: 'Luke',
    email: 'luke@gmail.com',
    password: '123'
  },
  {
    username: 'Nancy',
    email: 'Nancy@gmail.com',
    password: '123'
  },
  {
    username: 'random person',
    email: 'random@gmail.com',
    password: '123'
  }
];

const seedUsers = () => User.bulkCreate(userdata, {individualHooks: true});

module.exports = seedUsers;
