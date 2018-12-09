// app.js
const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');

const resume = require('./routes/resume.route');

const app = express();

// mongoose connection
const mongoose = require('mongoose');

let dev_db_url = 'mongodb://localhost:27017/resumePortal';
let mongoDB = process.env.MONGODB_URI || dev_db_url;
mongoose.connect(mongoDB, { useNewUrlParser: true });
mongoose.Promise = global.Promise;
let db = mongoose.connection;
db.on('error', console.error.bind(console, 'MongoDB connection error:'));

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));
app.use('/resumes', resume)

let port = 2324;

app.get('/', function(req, res) {
    res.sendFile(path.join(__dirname + '/views/index.html'));
})

app.get('/protected_page',function(req, res) {
    res.sendFile(path.join(__dirname + '/views/protected_page.html'));
})

app.listen(port);