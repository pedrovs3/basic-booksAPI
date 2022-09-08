const { Router } = require('express');
const cors = require('cors');
const homeController = require('./src/controllers/homeController');

const routes = Router();

routes.get('/:keyword', cors(), homeController.index);

module.exports = routes;
