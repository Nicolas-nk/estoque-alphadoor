/**
 * arquivo: routes/input.routes.js
 * descrição: arquivo responsável pelas rotas da API de entradas/compras
 * data: 22/01/22
 * autor: Nicolas Messias
 */

 const inputRoute = require('express-promise-router')();
 const inputController = require('../controllers/input.controller');

 //definindo rotas

//rota responsável por criar uma nova 'entrada' (POST): localhost:3000/api/input
inputRoute.post('/input', inputController.createInput);

 module.exports = inputRoute;