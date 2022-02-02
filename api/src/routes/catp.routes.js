/**
 * arquivo: routes/catp.routes.js
 * descrição: arquivo responsável pelas rotas da API de categorias dos produtos
 * data: 22/01/22
 * autor: Nicolas Messias
 */

const catpRoute = require("express-promise-router")();
const catpController = require("../controllers/catp.controller");

//definindo rotas

////rota responsável por criar uma nova 'categoria' (POST): localhost:3000/api/catp
catpRoute.post("/catp", catpController.createCatp);

//rota responsável por listar todas as 'categorias' (GET): localhost:3000/api/catp
catpRoute.get('/catp', catpController.listAllCatp);

module.exports = catpRoute;
