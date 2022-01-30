/**
 * arquivo: controllers/supplier.controller.js
 * descrição: arquivo responsável pela lógica das funcionalidades da API fornecedor
 * data: 29/01/22
 * autor: Nicolas Messias
 */

const db = require('../config/database');

// Método responsável por criar um novo fornecedor
exports.createSupplier = async(req, res) => {
    const { cod_fornecedor, telefone, email, empresa, responsavel} = req.body;
    let SQL = "INSERT INTO fornecedor (cod_fornecedor, telefone, email, empresa, responsavel) VALUES (UUID_SHORT(),?,?,?,?)";
    
    db.query(SQL, [telefone, email, empresa, responsavel])

    res.status(201).send({
        message: 'Supplier added successfully!',
        body: {
            supplier : {cod_fornecedor, telefone, email, empresa, responsavel}
        }
    })
};