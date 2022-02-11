const db = require('../database');
const util = require('util');
const cloudinary = require('cloudinary').v2;
cloudinary.config({
    cloud_name: process.env.CLOUD_NAME,
    api_key: process.env.CLOUD_KEY,
    api_secret: process.env.CLOUD_SECRET
});
const uploader = util.promisify(cloudinary.uploader.upload);
const destroyer = util.promisify(cloudinary.uploader.destroy);


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

        let imageID = '';
        
        async function uploadImage() {
            try {
                imageID = (await uploader(req.files.blogArticleImage.tempFilePath)).public_id;
                
                const articleDate = new Date().toISOString().slice(0, 10);
                const { blogArticleTitle, blogArticleText, blogArticleUser, blogArticleGuestUserName, blogArticleUserEmail } = req.body;
                let blogArticleAuthor = '';
        
                if (blogArticleUser) {
                    blogArticleAuthor = blogArticleUser
                } else if (blogArticleGuestUserName) {
                    blogArticleAuthor = `Guest user ${blogArticleGuestUserName}`
                };
        
                const sqlPostArticle = "INSERT INTO blog_articles(article_date, title, article, author, author_email, image) VALUES(?, ?, ?, ?, ?, ?) ;";
        
                db.query(sqlPostArticle, [articleDate, blogArticleTitle, blogArticleText, blogArticleAuthor, blogArticleUserEmail, imageID], (err, result) => {
                    res.send(result);
                });
            } catch (error) {
                console.log(error);
            }
        }
        uploadImage();

        // const articleDate = new Date().toISOString().slice(0, 10);
        // const { blogArticleTitle, blogArticleText, blogArticleUser, blogArticleGuestUserName, blogArticleUserEmail } = req.body;
        // let blogArticleAuthor = '';

        // if (blogArticleUser) {
        //     blogArticleAuthor = blogArticleUser
        // } else if (blogArticleGuestUserName) {
        //     blogArticleAuthor = `Guest user ${blogArticleGuestUserName}`
        // };

        // const sqlPostArticle = "INSERT INTO blog_articles(article_date, title, article, author, author_email, image) VALUES(?, ?, ?, ?, ?, ?) ;";

        // db.query(sqlPostArticle, [articleDate, blogArticleTitle, blogArticleText, blogArticleAuthor, blogArticleUserEmail, imageID], (err, result) => {
        //     res.send(result);
        // });
    },

    getArticleBySearchTerm: (req, res) => {

        const searchTerm = req.body.term;
        const sqlGetArticle = "SELECT * FROM blog_articles WHERE title LIKE CONCAT('%', ?, '%') LIMIT 20;";

        db.query(sqlGetArticle, searchTerm, (err, result) => {
            res.send(result);
        });
    },

    getRelatedArticles: (req, res) => {

        const rawSearchTerm = req.body;
        let relatedArticlesSearchTerm = [];

        rawSearchTerm.map((word, index) => {
            if (index === (rawSearchTerm.length - 1)) {
                relatedArticlesSearchTerm.push(`title LIKE '%${word}%'`);
            } else {
                relatedArticlesSearchTerm.push(`title LIKE '%${word}%' OR`);
            }
        });

        relatedArticlesSearchTerm = relatedArticlesSearchTerm.join(' ');
        const sqlGetArticle = `SELECT id, article_date, title, author FROM blog_articles WHERE ${relatedArticlesSearchTerm} LIMIT 10;`;

        db.query(sqlGetArticle, relatedArticlesSearchTerm)
            .then((result) => {
                res.send(result);
            })
            .catch((err) => {
                res.send(err)
            });
    },

    editArticle: (req, res) => {

        const articleDate = new Date().toISOString().slice(0, 10);
        const { blogArticleTitle, blogArticleText, blogArticleID } = req.body;

        const sqlEditArticle = `UPDATE blog_articles SET 
        article_date = ?,
        title = ?,
        article = ?
            WHERE id = ? LIMIT 1`;

        db.query(sqlEditArticle, [articleDate, blogArticleTitle, blogArticleText, blogArticleID], (err, result) => {
            res.send(result);
        });

    },

    deleteArticle: (req, res) => {

        const articleId = req.body.id;
        const sqlGetArticle = "DELETE FROM blog_articles WHERE id = ?;";

        db.query(sqlGetArticle, articleId, (err, result) => {
            res.send(result);
        });
    }
};

module.exports = controller;