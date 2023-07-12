const router = require('express').Router();
const adminAttendanceController = require('../controller/adminAttendanceController')

router.get('/enable', adminAttendanceController.getAttendanceEnable);
router.get('/disable', adminAttendanceController.getAttendanceDisable);
router.get('/status', adminAttendanceController.getAttendanceStatus);

module.exports = router;