const { Router } = require('express');
const cors = require('cors');
const homeController = require('./src/controllers/homeController');

const routes = Router();

// Rota para buscar livros
routes.get('/:keyword', cors(), homeController.index);

// Rota para filtrar livros ( QueryString )
routes.get('/', cors(), homeController.indexQuery);

module.exports = routes;
