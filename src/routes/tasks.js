const express = require('express');
const router = express.Router();
const taskController = require('../app/controllers/TaskController');
const { authenticateToken, authorizeAdmin } = require('../middleware/auth');

router.get('/', authenticateToken, authorizeAdmin, taskController.index);
router.post('/create', authenticateToken, authorizeAdmin, taskController.create);
router.post('/toggle/:id', authenticateToken, authorizeAdmin, taskController.toggle);
router.post('/delete/:id', authenticateToken, authorizeAdmin, taskController.delete);
router.post('/logout', taskController.logout);


module.exports = router;    