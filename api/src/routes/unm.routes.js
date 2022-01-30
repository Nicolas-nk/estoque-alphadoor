/**
 * arquivo: routes/unm.routes.js
 * descrição: arquivo responsável pelas rotas da API de unidades de medidas
 * data: 22/01/22
 * autor: Nicolas Messias
 */

 const unmtRoute = require('express-promise-router')();
 const unmController = require('../controllers/unm.controller');

 //definindo rotas

//rota responsável por criar uma nova 'unidade de medida' (POST): localhost:3000/api/unm
unmtRoute.post('/unm', unmController.createUnm);

 module.exports = unmtRoute;