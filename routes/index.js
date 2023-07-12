const router = require('express').Router();
const authenticate = require('../middleware/authenticate');
const authRoutes = require('./authRoute');
const userRoutes = require('./userRoute');
const adminAttendanceRoutes = require('./adminAttendanceRoute');

router.use('/api/v1/auth', authRoutes);
router.use('/api/v1/users',authenticate, userRoutes);
router.use('/api/v1/admin/attendance', authenticate, adminAttendanceRoutes);


module.exports = router;