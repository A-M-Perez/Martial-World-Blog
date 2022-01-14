const express = require('express');
const router = express.Router();
const articleControllers = require('../controllers/articles');

router.get('/api/get_articles', articleControllers.getArticle);
router.get('/api/get_article/:id', articleControllers.getArticleById);
router.post('/api/post_article', articleControllers.postArticle);
router.post('/api/get_articles_by_search', articleControllers.getArticleBySearchTerm);
router.post('/api/get_relatedArticles', articleControllers.getRelatedArticles);
// router.post('/api/edit_article', articleControllers.editArticle);
router.post('/api/delete_article/:id', articleControllers.deleteArticle);

module.exports = router;