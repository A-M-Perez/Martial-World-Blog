const express = require('express');
const router = express.Router();
const articleControllers = require('../controllers/articles');

router.get('/api/get_articles', articleControllers.getArticle);
router.get('/api/get_article/:id', articleControllers.getArticleById);
router.post('/api/post_article', articleControllers.postArticle);

module.exports = router;