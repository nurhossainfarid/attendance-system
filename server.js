const express = require('express');
const connectDB = require('./db');
const User = require('./models/UserModel');
const bcrypt = require('bcrypt');

const app = express();
app.use(express.json());

// User Registration
app.post('/registration', async (req, res, next) => {
    const { name, email, password } = req.body;
    // check data is valid or not
    if (!name || !email || !password) {
        return res.status(400).json({message: 'Invalid data'});
    }
    try {
        let user = await User.findOne({ email });
        if (user) {
            return res.status(400).json({message: 'User already exists'});
        }
    
        user = new User({ name, email, password })
    
        // hash password
        const salt = await bcrypt.genSalt(10);
        const hash = await bcrypt.hash(password, salt);
        user.password = hash;
        await user.save();
        return res.status(201).json({message: 'User create successfully', user});
    } catch (error) {
        next(error)
    }
})

// User Login
app.post('/login', async (req, res, next) => {
    // start
    // email,password = from user
    // user = find user with email
    // if(user not found)
    // return 400
    // if(password not match hashPassword)
    // return 400
    // token = generate token using user
    // return token
    // end
    const { email, password } = req.body;
    try {
        let user = await User.findOne({ email });
        if (!user) {
            return res.status(400).json({message: "Invalid Credential"})
        }
        // compare password
        const isMatch = await bcrypt.compare(password, user.password);
        if (!isMatch) {
            return res.status(400).json({message: "Invalid Credential"})
        }

        delete user._doc.password;
        res.status(200).json({ message: "Successfully Login", user});
    } catch (err) {
        next(err)
    }
})


app.get('/', (_, res) => {
    res.send("Home page");
});

// global error handle
app.use((err, req, res, next) => {
    console.log(err);
    res.status(500).json({message: "Server Error Occurred"})
})

// database connected
connectDB('mongodb://127.0.0.1:27017/attendanceSystem')
    .then(() => {
        console.log('Database connected');
        app.listen(4000, () => {
            console.log('App run on port 8000');
        })
    }).catch(err => {
        console.log(err);
    })