const User = require('../models/UserModel');
const error = require('../utils/error');

const findUsers = () => {
    return User.find();
}

const findUserByProperties = (key, value) => {
    if (key === '_id') {
        return User.findById(value)
    }
    return User.findOne({ [key]: value })
};

const createNewUser = ({ name, email, password, roles, accountStatus }) => {
    const user = new User({
        name,
        email,
        password,
        roles: roles ? roles : ['STUDENT'],
        accountStatus: accountStatus ? accountStatus : 'PENDING'
    });
    return user.save();
}

const updateUserById = async (userId, data) => {
    const user = await findUserByProperties('email', data.email)
    if (user) {
        throw error('Email already use', 400);
    }
    return update = await User.findByIdAndUpdate(userId, { ...data }, { new: true });
}

module.exports = {
    findUserByProperties, createNewUser, findUsers, updateUserById
}