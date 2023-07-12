const router = require('express').Router();
const studentAttendanceController = require('../controller/studentAttendanceController');

router.get('/status', studentAttendanceController.getAttendanceStatus)
router.get('/:aId', studentAttendanceController.getPerformAttendance);

module.exports = router;