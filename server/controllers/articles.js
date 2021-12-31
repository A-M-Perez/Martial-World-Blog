const db = require('../database');

const controller = {
    getArticle: (req, res) => {
        const sqlGetArticle = "SELECT * FROM blog_articles LIMIT 100;";
        db.query(sqlGetArticle, (err, result) => {
            res.send(result);
        });
    },
    postArticle: (req, res) => {
        const sqlPostArticle = "INSERT INTO blog_articles ;";
        db.query(sqlPostArticle, (err, result) => {
            res.send(result);
        });
    }
};

module.exports = controller;