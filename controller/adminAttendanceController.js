const adminAttendanceServices = require('../services/adminAttendanceService');

const getAttendanceEnable = async (_req, res, next) => {
    try {
        const sheet = await adminAttendanceServices.enableAnAttendance();
        if (!sheet) {
           throw error("Attendance can not enable successfully", 400) 
        }
        res.status(201).json(sheet)
    } catch (err) {
        next(err);
    }
}

const getAttendanceDisable = async (_req, res, next) => {
    try {
        
    } catch (err) {
        next(err);
    }
}

const getAttendanceStatus = async (_req, res, next) => {
    try {
        
    } catch (err) {
        next(err);
    }
}

module.exports = {
    getAttendanceEnable, getAttendanceDisable, getAttendanceStatus
}