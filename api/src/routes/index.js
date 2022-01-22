/**
 * arquivo: server.js
 * descrição: arquivo responsável pela chamada da API na aplicação no lado do back-end
 * data: 22/01/22
 * autor: Nicolas Messias
 */

const express = require('express');

const router = express.Router();

router.get('/api', (req, res) =>{
    res.status(200).send({
        success: 'true',
        menssage: 'Seja bem vindo a API do estoque da Alpha Door',
        version: '1.0.0'
    })
});

module.exports = router;