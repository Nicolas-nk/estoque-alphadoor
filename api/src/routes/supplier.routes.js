/**
 * arquivo: routes/supplier.routes.js
 * descrição: arquivo responsável pelas rotas da API de fornecedor
 * data: 22/01/22
 * autor: Nicolas Messias
 */

 const suppllierRoute = require('express-promise-router')();
 const supplierController = require('../controllers/supplier.controller');

 //definindo rotas

 //rota responsável por criar um novo 'fornecedor' (POST): localhost:3000/api/supplier
 suppllierRoute.post('/supplier', supplierController.createSupplier);

 //rota responsável por listar todos os 'fornecedores' (GET): localhost:3000/api/supplier
 suppllierRoute.get('/supplier', supplierController.listAllSuppliers);

 module.exports = suppllierRoute;