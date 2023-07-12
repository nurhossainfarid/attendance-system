const AdminAttendance = require('../models/AdminAttendanceModel');
const StudentAttendance = require('../models/StudentAttendanceModel');
const error = require('../utils/error');
const {addMinutes, isAfter} = require('date-fns')

const performanceAnAttendance = async (pId, uId) => {
    /**
     * Step1- find attendance by id
     * Step2- Check it is running or not
     * Step3- Check already performance or not
     * Step4- Performance
     */
    const adminAttendance = await AdminAttendance.findById(pId);
    if (!adminAttendance) {
        throw error("Invalid Attendance Id", 400)
    }
    const running = await AdminAttendance.findOne({ status: "RUNNING" });
    if (!running) {
        throw error("Not running", 400);
    }

    let attendance = await StudentAttendance.findOne({
        user: uId,
        adminAttendance: pId,
    })
    if (attendance) {
        throw error("Already perform on this attendance", 400);
    }
    attendance = new StudentAttendance({
        user: uId,
        adminAttendance: pId,
    })
    return attendance.save();
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
    performanceAnAttendance, checkAttendanceStatus
}