const { Schema, model } = require('mongoose');
const validator = require('validator');

// Create User Schema
const userSchema = new Schema({
    name: {
        type: String,
        required: true,
        minLength: [3, 'User name at least 3 characters'],
        maxLength: [15, 'User name at most 15 characters']
    },
    email: {
        type: String,
        required: true,
        validate: {
            validator: function (v) {
                return /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(v);
            },
            message: prop =>  `Invalid email: ${prop.value}`
        }
    },
    password: {
        type: String,
        required: [true, 'Must be provided password'],
        minLength: [3, 'Password is too short'],
    },
    roles: {
        type: [String],
        required: [true, 'Provide your role'],
        default: ['STUDENT'],
    },
    accountStatus: {
        type: String,
        required: true,
        enum: ["PENDING", "ACTIVE", "REJECTED",],
        default: 'PENDING',
    }
})

const User = model('User', userSchema);
module.exports = User;