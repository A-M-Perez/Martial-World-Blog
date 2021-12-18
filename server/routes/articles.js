const express = require('express');
const router = express.Router();
const articleControllers = require('../controllers/articles');

router.get('/api/get_articles', articleControllers.getArticle);

module.exports = router;