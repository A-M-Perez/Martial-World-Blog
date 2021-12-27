const db = require('../database');

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