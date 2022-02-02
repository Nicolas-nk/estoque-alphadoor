/**
 * arquivo: controllers/input.controller.js
 * descrição: arquivo responsável pela lógica das funcionalidades da API entradas
 * data: 29/01/22
 * autor: Nicolas Messias
 */

 const db = require('../config/database');

 // Método responsável por criar uma nova 'entrada'
 exports.createInput = async(req, res) => {
     const { cod_compra, data_compra, quantidade_compra, valor_compra, custo_compra, cod_produto, cod_fornecedor} = req.body;
     let SQL = "INSERT INTO entradas (cod_compra, data_compra, quantidade_compra, valor_compra, custo_compra, cod_produto, cod_fornecedor) VALUES (UUID_SHORT(),?,?,?,?,?,?)";
     
     db.query(SQL, [ data_compra, quantidade_compra, valor_compra, custo_compra, cod_produto, cod_fornecedor])
 
     res.status(201).send({
         message: 'input added successfully!',
         body: {
             supplier : {cod_compra, data_compra, quantidade_compra, valor_compra, custo_compra, cod_produto, cod_fornecedor}
         }
     })
 };

 //Método respónsavel por listar todas as entradas
exports.listAllInputs = async(req, res) => {
    let SQL = ('SELECT * FROM entradas');
    
    db.query(SQL, (err, result) =>{
        res.status(200).send(result)
    })
}