const express = require('express');
const app = express();
//MAIL PORT
const app2 = express();
//delete line above
const bodyParser = require('body-parser');
const cors = require('cors');
const bcrypt = require('bcrypt');
const cookieParser = require('cookie-parser');
const session = require('express-session');
const nodemailer = require('nodemailer');
require('dotenv').config();
const db = require('./database');

//MAIL PORT
app2.listen(587, (req, res) => {
    console.log('Running on Port 587 for email');
})

//SERVER
app.listen(3001, (req, res) => {
    console.log('Running on Port 3001');
});

//ROUTES
const clientURL = require('../src/Global');
const schoolsRoutes = require('./routes/schools');
const loginRoutes = require('./routes/login');
const articleRoutes = require('./routes/articles');
const contactRoutes = require('./routes/contactus');


app.use(cors({
    origin: [clientURL],
    methods: ['GET', 'POST'],
    credentials: true
}));
app.use(express.json());
app.use(cookieParser());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(session({
    key: 'user_id',
    secret: 'asdaf3241-00-1iwqepr8972q304123j@!kefaj0sd8$#jfa09',
    resave: false,
    saveUninitialized: false,
    cookie: {
        expires: 60 * 60 * 24
    }
}));

//CONTROLLERS
app.use(schoolsRoutes);
app.use(loginRoutes);
app.use(articleRoutes);
app.use(contactRoutes);