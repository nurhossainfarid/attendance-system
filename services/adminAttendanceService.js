const AdminAttendance = require('../models/AdminAttendanceModel');
const error = require('../utils/error');
const {addMinutes, isAfter} = require('date-fns');

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

const checkAttendanceStatus = async () => {
    let running = await AdminAttendance.findOne({ status: "RUNNING" });
    if (!running) {
        throw error("Not running", 400);
    }
    const started = addMinutes(
        new Date(running.createdAt), running.timeLimit
    )
    if (isAfter(new Date(), started)) {
        running.status = "COMPLETED",
        await running.save();
    }
    return running;
}

module.exports = {
    enableAnAttendance, disableAnAttendance, checkAttendanceStatus
}