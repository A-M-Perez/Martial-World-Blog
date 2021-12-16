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

app.use(cors());    
app.use(express.json());
app.use(bodyParser.urlencoded({ extend: true }));

app.listen(3001, (req, res) => {
    console.log('Running on Port 3001');
});


//INSERT NEW USERS WITH SIGN UP
app.post('/api/insert_user', async (req, res) => {

    const email = req.body.email;
    const name = req.body.name;
    const password = req.body.password;

    try {
        const hashedPassword = await bcrypt.hash(password, 10);

        const sqlInsertNewUser = "INSERT INTO users(email, name, password) VALUES(?, ?, ?);"
        db.query(sqlInsertNewUser, [email, name, hashedPassword]);
    }
    catch {
        res.status(500);
    };
});

//GET STORED ARTICLES FOR BLOG
app.get('/api/get_articles', (req, res) => {

});