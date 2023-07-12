const studentService = require('../services/studentAttendanceService')

const getPerformAttendance = async (req, res, next) => {
    const { aId } = req.params;
    try {
        const attendance = await studentService.performanceAnAttendance(aId, req.user._id);
        res.status(201).json(attendance)
    } catch (err) {
        next(err)
    }
}

const getAttendanceStatus = async (_req, res, next) => {
    try {
        const status = await studentService.checkAttendanceStatus();
        res.status(200).json(status);
    } catch (err) {
        next(err)
    }
}

module.exports = {
    getPerformAttendance, getAttendanceStatus
}