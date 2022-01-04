const express = require('express');
const router = express.Router();
const loginControllers = require('../controllers/login');

router.post('/api/insert_user', loginControllers.insertUser);
router.post('/api/login_user', loginControllers.loginUser);
router.post('/api/login_guestUser', loginControllers.loginGuestUser);
router.get('/api/logout', loginControllers.logOutUser);

module.exports = router;