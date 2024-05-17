const express = require('express');
const router = express.Router();
const taskController = require('../app/controllers/TaskController');

router.get('/', taskController.index);
router.post('/create', taskController.create);
router.put('/toggle/:id', taskController.toggle);
router.delete('/delete/:id', taskController.delete);

module.exports = router;