const express = require('express');
const router = express.Router();
const editController = require('../app/controllers/EditController');

router.get('/', editController.index);
router.post('/toggle/:id', editController.toggle);

module.exports = router;