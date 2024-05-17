const express = require('express');
const router = express.Router();
const loginController = require('../app/controllers/LoginController');

router.get('/', loginController.showLoginPage);
router.post('/', loginController.login);
router.get('/logout', loginController.logout);

module.exports = router;
