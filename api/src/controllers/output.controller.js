/**
 * arquivo: controllers/output.controller.js
 * descrição: arquivo responsável pela lógica das funcionalidades da API fornecedor
 * data: 29/01/22
 * autor: Nicolas Messias
 */

 const db = require('../config/database');

 // Método responsável por criar um novo fornecedor
 exports.createOutput = async(req, res) => {
     const { cod_venda, data_venda, quantidade_venda, valor_venda, custo_venda, cod_produto } = req.body;
     let SQL = "INSERT INTO fornecedor (cod_venda, data_venda, quantidade_venda, valor_venda, custo_venda, cod_produto) VALUES (UUID_SHORT(),?,?,?,?,?)";
     
     db.query(SQL, [data_venda, quantidade_venda, valor_venda, custo_venda, cod_produto])
 
     res.status(201).send({
         message: 'Supplier added successfully!',
         body: {
             supplier : {cod_venda, data_venda, quantidade_venda, valor_venda, custo_venda, cod_produto}
         }
     })
 };