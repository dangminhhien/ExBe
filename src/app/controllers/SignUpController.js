const Login = require('../models/loginModel');
const bcrypt = require('bcrypt');

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
            res.render('home');
        } catch (error) {
            res.render('back', { message: 'Error occurred during sign up' }); // Đảm bảo rằng bạn có file views/back.hbs
        }
    }
}

module.exports = new SignUpController();
