const express = require('express');
const router = express.Router();
const schoolController = require('../controllers/schools');

router.get('/api/get_school', schoolController.getSchool);

module.exports = router;