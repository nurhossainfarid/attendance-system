const router = require('express').Router();
const adminAttendanceController = require('../controller/adminAttendanceController')

router.get('/enable', adminAttendanceController.getAttendanceEnable);
router.get('/disable', () => {})
router.get('/status', () => {})

module.exports = router;