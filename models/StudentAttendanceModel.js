const { Schema, model } = require('mongoose');
const { ObjectId } = Schema.Types;

const studentAttendanceSchema = new Schema({
    user: {
        type: ObjectId,
        ref: 'User',
    },
    createdAt: {
        type: Date,
    },
    adminAttendance: {
        type: ObjectId,
        ref: 'AdminAttendance',
    }
});

const StudentAttendance = model('StudentAttendance', studentAttendanceSchema);
module.exports = StudentAttendance;