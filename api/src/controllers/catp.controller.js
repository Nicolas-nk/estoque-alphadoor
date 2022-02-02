/**
 * arquivo: controllers/catp.controller.js
 * descrição: arquivo responsável pela lógica das funcionalidades da API categoria produto
 * data: 29/01/22
 * autor: Nicolas Messias
 */

 const db = require('../config/database');

 // Método responsável por criar uma nova 'categoria'
 exports.createCatp = async(req, res) => {
     const { nome_categoria} = req.body;
     let SQL = "INSERT INTO cat_produto (nome_categoria) VALUES (?)";
     
     db.query(SQL, [nome_categoria])
 
     res.status(201).send({
         message: 'Category added successfully!',
         body: {
             category : {nome_categoria}
         }
     })
 };

 //Método respónsavel por listar todas as categorias
exports.listAllCatp = async(req, res) => {
    let SQL = ('SELECT * FROM cat_produto');
    
    db.query(SQL, (err, result) =>{
        res.status(200).send(result)
    })
}