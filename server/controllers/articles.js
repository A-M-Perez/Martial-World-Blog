const mysql = require('mysql2');
const db = mysql.createPool({
    host: 'localhost',
    user: 'Martin',
    password: 'password',
    database: 'martialworld'
});

const controller = {
    getArticle: (req, res) => {
        const sqlGetArticle = "SELECT * FROM blog_articles LIMIT 100;";
        db.query(sqlGetArticle, (err, result) => {
            res.send(result);
        });
    },
    postArticle: (req, res) => {

    }
};

module.exports = controller;