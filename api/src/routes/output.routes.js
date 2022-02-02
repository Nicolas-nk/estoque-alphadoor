/**
 * arquivo: routes/output.routes.js
 * descrição: arquivo responsável pelas rotas da API de saidas/vendas
 * data: 22/01/22
 * autor: Nicolas Messias
 */

 const outputRoute = require('express-promise-router')();
 const outputController = require('../controllers/output.controller');

 //definindo rotas

//rota responsável por criar uma nova 'saida' (POST): localhost:3000/api//output
outputRoute.post('/output', outputController.createOutput);

//rota responsável por listar todas as 'saidas' (POST): localhost:3000/api//output
outputRoute.get('/output', outputController.listAllOutputs);

 module.exports = outputRoute;