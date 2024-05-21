const Login = require('../models/loginModel');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const secretKey = 'your-secret-key';

class LoginController {
    showLoginPage(req, res) {
        res.render('login');
    }

    async login(req, res) {
        const { name, password } = req.body;
        try {
            const user = await Login.findOne({ name });
            if (user) {
                const match = await bcrypt.compare(password, user.password);
                if (match) {
                    const token = jwt.sign({ name: user.name, id: user._id, role: user.role }, secretKey, { expiresIn: '1h' });
                    res.cookie('token', token, { httpOnly: true });

                    if (user.role === 'admin') {
                        res.redirect('/tasks');
                    } else {
                        res.redirect('/edit');
                    }
                } else {
                    res.render('login', { message: 'Incorrect password' });
                }
            } else {
                res.render('login', { message: 'User not found' });
            }
        } catch (error) {
            res.render('back', { message: 'Error occurred during login' });
        }
    }

    logout(req, res) {
        res.clearCookie('token');
        res.redirect('/login');
    }
}

module.exports = new LoginController();
