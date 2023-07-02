const express = require('express');
const connectDB = require('./db');
const authentication = require('./middleware/authenticate');
const routes = require('./routes');

const app = express();
app.use(express.json());

app.use(routes);

app.get('/private', authentication, async (req, res) => {
    console.log('I am user: ', req.user);
    return res.status(200).json({ message: "I am private route" });
});

app.get('/public', (req, res) => {
    res.status(200).json({ message: "I am public route" });
})

app.get('/', (_, res) => {
    res.send("Home page");
});

// global error handle
app.use((err, req, res, next) => {
    console.log(err);
    const message = err.message ? err.message : 'Server Error Occurred';
    const status = err.status ? err.status : 500;
    res.status(status).json({message})
})

// database connected
connectDB('mongodb://127.0.0.1:27017/attendanceSystem')
    .then(() => {
        console.log('Database connected');
        app.listen(4000, () => {
            console.log('App run on port 4000');
        })
    }).catch(err => {
        console.log(err);
    })