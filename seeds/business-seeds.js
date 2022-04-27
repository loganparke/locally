const sequelize = require('../config/connection');
const { Business } = require('../models');

const businessData = [
  {
    business_name: 'Tokyo Station',
    catagory_id: 1,
    website: 'https://www.tokyostationutah.com/',
    phone: '801-627-8288',
    address: '2295 Washington Blvd, Ogden, Utah, 84401',
    mainPhoto: 'https://images.squarespace-cdn.com/content/v1/54f9248de4b0b89d005f8d31/1460741568512-6FPVVQQTAKKY17GUJTLQ/IMG_3509_10_11_tonemapped.jpg?format=2500w',
    hours: {
      monday: '9AM-5PM',
      tuesday: '9AM-5PM',
      wednesday: '9AM-5PM',
      thursday: '9AM-5PM',
      friday: '9AM-5PM',
      saturday: '9AM-5PM',
      sunday: 'closed'
    }
  },
  {
    business_name: 'SLC Scapes',
    catagory_id: 2,
    website: 'http://www.slcscapes.com',
    phone: '801-919-9438',
    address: 'Draper, UT 84020',
    mainPhoto: 'https://images.squarespace-cdn.com/content/v1/5c82bffaebfc7f22b6c4408d/1649620830293-JEXQQ8EKBBQOW898NSL1/Four-Up-with-Logo.jpg?format=1000w',
    hours: {
      monday: '8AM-5PM',
      tuesday: '8AM-5PM',
      wednesday: '8AM-5PM',
      thursday: '8AM-5PM',
      friday: '8AM-5PM',
      saturday: '8AM-5PM',
      sunday: 'closed'
    }
  },
  {
    business_name: 'Mr. Rooter Plumbing of Salt Lake City',
    catagory_id: 3,
    website: 'http://mrrooter.com',
    phone: '385-275-0036',
    address: '112 W 13775 S Ste 4 Draper, UT 84020',
    mainPhoto: 'https://s3-media0.fl.yelpcdn.com/bphoto/LicX6rLansW6DIloqoTSig/258s.jpg',
    hours: {
      monday: '7:30AM-8PM',
      tuesday: '7:30AM-8PM',
      wednesday: '7:30AM-8PM',
      thursday: '7:30AM-8PM',
      friday: '7:30AM-8PM',
      saturday: '7:30AM-8PM',
      sunday: 'closed'
    }
  }
];
// test for branch push
const seedBusinesses = () => Business.bulkCreate(businessData, {individualHooks: true});

module.exports = seedBusinesses;