const router = require('express').Router();

const userRoutes = require('./userRoutes');
const businessRoutes = require('./businessRoutes');
const reviewRoutes = require('./reviewRoutes');
const catagoryRoutes = require('./catagoryRoutes');

router.use('/users', userRoutes);
router.use('/businesses', businessRoutes);
router.use('/review', reviewRoutes);
router.use('/catagory', catagoryRoutes);

module.exports = router;