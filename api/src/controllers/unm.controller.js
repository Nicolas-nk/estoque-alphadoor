/**
 * arquivo: controllers/unm.controller.js
 * descrição: arquivo responsável pela lógica das funcionalidades da API fornecedor
 * data: 29/01/22
 * autor: Nicolas Messias
 */

 const db = require('../config/database');

 // Método responsável por criar um novo fornecedor
 exports.createUnm = async(req, res) => {
     const { nome_un_medida} = req.body;
     let SQL = "INSERT INTO un_medida (nome_un_medida) VALUES (?)";
     
     db.query(SQL, [nome_un_medida])
 
     res.status(201).send({
         message: 'Unidade de medida added successfully!',
         body: {
             unidade_de_medida : {nome_un_medida}
         }
     })
 };

 //Método respónsavel por listar todos os fornecedores
exports.listAllUnm = async(req, res) => {
    let SQL = ('SELECT * FROM un_medida');
    
    db.query(SQL, (err, result) =>{
        res.status(200).send(result)
    })
}