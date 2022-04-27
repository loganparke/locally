const router = require('express').Router();

const userRoutes = require('./userRoutes');
const businessRoutes = require('./businessRoutes');
const reviewRoutes = require('./reviewRoutes');

router.use('/users', userRoutes);
router.use('/businesses', businessRoutes);
router.use('/review', reviewRoutes);

module.exports = router;