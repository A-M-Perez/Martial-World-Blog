const db = require('../database');

const controller = {

    getArticle: (req, res) => {

        const sqlGetArticle = "SELECT * FROM blog_articles LIMIT 100;";

        db.query(sqlGetArticle, (err, result) => {
            res.send(result);
        });
    },

    getArticleById: (req, res) => {

        const articleId = req.params.id;
        const sqlGetArticle = "SELECT * FROM blog_articles WHERE id = ? LIMIT 1;";
        
        db.query(sqlGetArticle, articleId, (err, result) => {
            res.send(result);
        });
    },

    postArticle: (req, res) => {

        const articleDate = new Date().toISOString().slice(0, 10);
        const { blogArticleTitle, blogArticleText } = req.body;
        const sqlPostArticle = "INSERT INTO blog_articles(article_date, title, article, author) VALUES(?, ?, ?, ?) ;";

        db.query(sqlPostArticle, [articleDate, blogArticleTitle, blogArticleText, 'martin'], (err, result) => {
            res.send(result);
        });
    },

    getArticleBySearchTerm: (req, res) => {

        const searchTerm = req.body.term;
        const sqlGetArticle = "SELECT * FROM blog_articles WHERE title LIKE CONCAT('%', ?, '%') LIMIT 20;";

        db.query(sqlGetArticle, searchTerm, (err, result) => {
            res.send(result);
        });
    }
};

module.exports = controller;