const express = require('express');
const router = express.Router();
const signUpController = require('../app/controllers/SignUpController');

router.get('/', signUpController.showSignUpPage);
router.post('/', signUpController.signUp);

module.exports = router;    