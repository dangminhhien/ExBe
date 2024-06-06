const express = require('express');
const router = express.Router();
const editController = require('../app/controllers/EditController');
const { authenticateToken, authorizeAdmin } = require('../middleware/auth');


router.get('/', authenticateToken, editController.index);
router.post('/toggle/:id', authenticateToken, editController.toggle);
router.post('/logout', editController.logout);

module.exports = router;    