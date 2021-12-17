const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const app = express();
const mysql = require('mysql2');
const db = mysql.createPool({
    host: 'localhost',
    user: 'Martin',
    password: 'password',
    database: 'martialworld'
});
const bcrypt = require('bcrypt');
const cookieParser = require('cookie-parser');
const session = require('express-session');
const clientURL = require('../src/Global');

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
}))

app.listen(3001, (req, res) => {
    console.log('Running on Port 3001');
});

//INSERT NEW USERS TO DATABASE WHEN SIGNING UP
app.post('/api/insert_user', async (req, res) => {

    const { email, name, password } = req.body;

    try {
        const hashedPassword = await bcrypt.hash(password, 10);

        const sqlInsertNewUser = "INSERT INTO users(email, name, password) VALUES(?, ?, ?);"
        db.query(sqlInsertNewUser, [email, name, hashedPassword]);
    }
    catch {
        res.status(500);
    };
});

//CHECK USER AND PASSWORD AT LOGIN
app.post(`/api/login_user`, (req, res) => {

    const email = req.body.loginEmail;
    const password = req.body.loginPassword;

    const sqlGetLoginUser = "SELECT * FROM users WHERE email = ?";
    db.query(sqlGetLoginUser, email, (err, result) => {

        if (err) {
            res.status(500);
        }

        if (result.length > 0) {
            bcrypt.compare(password, result[0].password, (err, response) => {
                if (response) {
                    req.session.name = result[0].name;
                    console.log(req.session.name);
                } else {
                    console.log('el password esta mal');
                }
            });

        } else {
            console.log('no existe el usuario')
        }
    });

});

//CREATE SESSION FOR USERS WHEN LOGGING IN AS GUEST USERS
app.post('/api/login_guestUser', (req, res) => {

    req.session.nickname = req.body.nickname;
    console.log(req.session.nickname);

});

//GET STORED ARTICLES FOR BLOG
app.get('/api/get_articles', (req, res) => {
    const sqlGetArticle = "SELECT * FROM blog_articles LIMIT 100;";
    db.query(sqlGetArticle, (err, res) => {
        console.log(res[0].title);
    });
});