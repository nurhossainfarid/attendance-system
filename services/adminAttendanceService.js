const AdminAttendance = require('../models/AdminAttendanceModel');
const error = require('../utils/error');

const enableAnAttendance = async () => {
    const running = await AdminAttendance.findOne({ status: "RUNNING" });
    if (running) {
        throw error("Already running", 400);
    }
    const attendance = new AdminAttendance({});
    return attendance.save();
}

const disableAnAttendance = () => {

}

const checkAttendanceStatus = () => {

}

module.exports = {
    enableAnAttendance, disableAnAttendance, checkAttendanceStatus
}