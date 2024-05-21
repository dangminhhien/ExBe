const express = require('express');
const router = express.Router();
const editController = require('../app/controllers/EditController');
const { authenticateToken } = require('../middleware/auth');

router.get('/', authenticateToken, editController.index);
router.post('/toggle/:id', authenticateToken, editController.toggle);

module.exports = router;