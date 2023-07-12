const { Schema, model } = require('mongoose');
const { ObjectId } = Schema.Types;

const studentAttendanceSchema = new Schema({
    user: {
        type: ObjectId,
        ref: 'User',
        required: [true, "User id is required"]
    },
    adminAttendance: {
        type: ObjectId,
        ref: 'AdminAttendance',
        required: [true, "Attendance id is required"]
    }
});

const StudentAttendance = model('StudentAttendance', studentAttendanceSchema);
module.exports = StudentAttendance;