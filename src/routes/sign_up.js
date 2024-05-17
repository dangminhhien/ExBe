const express = require ('express');
const routes = express.Router();

const sign_upController = require('../app/controllers/Sign_upController');

routes.use('/', sign_upController.index);


module.exports = routes;