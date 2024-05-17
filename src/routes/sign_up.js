
const express = require('express');
const router = express.Router();
const SignUpController = require('../app/controllers/SignUpController');
const authenticateToken = require('../middleware/auth');

router.get('/', SignUpController.showSignUpPage);
router.post('/signup', authenticateToken, SignUpController.signUp);

module.exports = router;
