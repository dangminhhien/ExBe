const Login = require('../models/loginModel');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const secretKey = 'your-secret-key';

class SignUpController {
    showSignUpPage(req, res) {
        res.render('sign_up');
    }

    async signUp(req, res) {
        const { name, password } = req.body;
        try {
            const hashedPassword = await bcrypt.hash(password, 10);
            const newUser = new Login({ name, password: hashedPassword });
            await newUser.save();
            const token = jwt.sign({ name: newUser.name, id: newUser._id }, secretKey, { expiresIn: '1h' });
            res.cookie('token', token, { httpOnly: true });
            res.render('home');
        } catch (error) {
            res.render('back', { message: 'Error occurred during sign up' });
        }
    }
}

module.exports = new SignUpController();
