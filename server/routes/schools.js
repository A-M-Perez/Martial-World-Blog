const express = require('express');
const router = express.Router();
const schoolController = require('../controllers/schools');

router.get('/api/get_school', schoolController.getSchool);
router.get('/api/get_school/:id', schoolController.getSchoolById);

module.exports = router;