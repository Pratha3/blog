const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const router = require('./router/user.router');
const connectDB = require('./config/database');
connectDB();

const app = express();

const port = 8888;

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.set('view engine', 'ejs');
app.use("/uploads", express.static('uploads'));

app.use(router)

app.listen(port, (err) => {
    console.log(`server is running on port http://localhost:${port}`);
});