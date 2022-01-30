/**
 * arquivo: routes/product.routes.js
 * descrição: arquivo responsável pelas rotas da API de produtos
 * data: 22/01/22
 * autor: Nicolas Messias
 */

 const productRoute = require('express-promise-router')();
 const productController = require('../controllers/product.controller');

 //definindo rotas

//rota responsável por criar um novo 'produto' (POST): localhost:3000/api/product
productRoute.post('/product', productController.createProduct);

 module.exports = productRoute;