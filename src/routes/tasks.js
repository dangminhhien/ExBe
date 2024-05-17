// src/routes/tasks.js

const express = require('express');
const router = express.Router();
const taskController = require('../app/controllers/TaskController');
const authenticateToken = require('../middleware/auth');

router.get('/', authenticateToken, taskController.index);
router.post('/create', authenticateToken, taskController.create);
router.post('/toggle/:id', authenticateToken, taskController.toggle);
router.post('/delete/:id', authenticateToken, taskController.delete);

module.exports = router;
