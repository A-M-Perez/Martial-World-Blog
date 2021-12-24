const mysql = require('mysql2');
const db = mysql.createPool({
    host: 'localhost',
    user: 'Martin',
    password: 'password',
    database: 'martialworld'
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