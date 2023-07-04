const router = require('express').Router();
const authenticate = require('../middleware/authenticate');
const authRoutes = require('./authRoute');
const userRoutes = require('./userRoute');

router.use('/api/v1/auth', authRoutes);
router.use('/api/v1/users',authenticate, userRoutes);

module.exports = router;