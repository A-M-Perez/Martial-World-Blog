const express = require('express');
const router = express.Router();
const contactUsController = require('../controllers/contactus');

router.post('/api/send_message', contactUsController.sendEmail);

module.exports = router;