const User = require('../models/UserModel');

const findUserByProperties = (key, value) => {
    if (key === '_id') {
        return User.findById(key)
    }
    return User.findOne({ [key]: value })
};

const createNewUser = ({ name, email, password }) => {
    const user = new User({ name, email, password });
    return user.save();
}

module.exports = {
    findUserByProperties, createNewUser
}