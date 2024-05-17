const jwt = require('jsonwebtoken');
const secretKey = 'your-secret-key';

const authenticateToken = (req, res, next) => {
    const token = req.cookies.token;
    if (!token) {
        return res.redirect('/login');
    }

    jwt.verify(token, secretKey, (err, user) => {
        if (err) {
            return res.redirect('/login');
        }
        req.user = user;
        next();
    });
};

module.exports = authenticateToken;
