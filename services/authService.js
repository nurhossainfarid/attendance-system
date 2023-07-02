const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const { findUserByProperties, createNewUser } = require('./userService');
const error = require('../utils/error');

const registrationService = async ({ name, email, password }) => {
    let user = await findUserByProperties('email', email);
    if (user) throw error('User already exists', 400);

    // hash password
    const salt = await bcrypt.genSalt(10);
    const hash = await bcrypt.hash(password, salt);

    return createNewUser({name, email, password: hash});
};

const loginService = async ({email, password}) => {
    let user = await findUserByProperties('email', email);
    if (!user) throw error('Invalid Credential', 400)
    // compare password
    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) throw error('Invalid Credential', 400)

    const payload = {
        _id: user._id,
        name: user.name,
        email: user.email,
        roles: user.roles,
        accountStatus: user.accountStatus,
    }

    return jwt.sign(payload, 'secret-key', {expiresIn: '24h'})
};

module.exports = {
    registrationService, loginService
}