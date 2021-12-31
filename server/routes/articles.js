const express = require('express');
const router = express.Router();
const articleControllers = require('../controllers/articles');

router.get('/api/get_articles', articleControllers.getArticle);
router.get('/api/post_articles', articleControllers.postArticle);

module.exports = router;