const User = require('../models/UserModel');
const jwt = require('jsonwebtoken')
const bcrypt = require('bcrypt');
const { registrationService, loginService } = require('../services/authService');

exports.registrationController = async (req, res, next) => {
    const { name, email, password } = req.body;
    // check data is valid or not
    if (!name || !email || !password) {
        return res.status(400).json({message: 'Invalid data'});
    }
    try {
        const user = await registrationService({name, email, password});
        return res
            .status(201)
            .json({ message: 'User create successfully', user });
    } catch (err) {
        next(err)
    }
}

exports.loginController = async (req, res, next) => {
    const { email, password } = req.body;
    try {
        const token = await loginService({email, password});
        return res
            .status(200)
            .json({ message: "Successfully Login", "token": token });
    } catch (err) {
        next(err)
    }
}