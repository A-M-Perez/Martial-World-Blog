require('dotenv').config();
const mysql = require('mysql2');
const db = mysql.createPool({
    host: process.env.MYSQL_HOST,
    user: process.env.MYSQL_USER,
    password: process.env.MYSQL_PASS,
    database: process.env.MYSQL_DATABASE
});

const controller = {
    getSchool: (req, res) => {

        try {
            const sqlGetSchool = "SELECT * FROM schools LIMIT 50;";
            db.query(sqlGetSchool, (err, result) => {
                res.send(result);
            });
        }
        catch {
            res.status(500);
        }
    }
}

module.exports = controller;