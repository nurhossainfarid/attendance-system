const { Schema, model } = require('mongoose');

const adminAttendanceSchema = new Schema({
    timeLimit: {
        type: Number,
    },
    status: {
        type: String,
    },
    createdAt: {
        type: Date,
    }
});

const AdminAttendance = model('AdminAttendance', adminAttendanceSchema);
module.exports = AdminAttendance;