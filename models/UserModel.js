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
    },
    password: {
        type: String,
    },
    roles: [String],
    accountStatus: String
})

const User = model('User', userSchema);
module.exports = User;