const Login = require('../models/loginModel');
const bcrypt = require('bcrypt');

class SignUpController {
    showSignUpPage(req, res) {
        res.render('sign_up');
    }

    async signUp(req, res) {
        const { name, password, role } = req.body;
        try {
            const hashedPassword = await bcrypt.hash(password, 10);
            const newUser = new Login({ name, password: hashedPassword, role });
            await newUser.save();
            res.redirect('/login');
        } catch (error) {
            res.render('back', { message: 'Error occurred during sign up' });
        }
    }
}

module.exports = new SignUpController();
