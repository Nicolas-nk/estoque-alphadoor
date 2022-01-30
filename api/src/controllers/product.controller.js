/**
 * arquivo: controllers/product.controller.js
 * descrição: arquivo responsável pela lógica das funcionalidades da API fornecedor
 * data: 29/01/22
 * autor: Nicolas Messias
 */

const db = require("../config/database");

// Método responsável por criar um novo 'produto'
exports.createProduct = async (req, res) => {
  const { cod_produto, nome_produto, especificacao_produto, cor, estoque_min, custo, preco,cod_un_medida, cod_categoria } = req.body;
  let SQL =
    "INSERT INTO fornecedor (cod_produto, nome_produto, especificacao_produto, cor, estoque_min, custo, preco,cod_un_medida, cod_categoria) VALUES (UUID_SHORT(),?,?,?,?,?,?,?,?)";

  db.query(SQL, [nome_produto, especificacao_produto, cor, estoque_min, custo, preco,cod_un_medida, cod_categoria]);

  res.status(201).send({
    message: "Product added successfully!",
    body: {
      product: { cod_produto, nome_produto, especificacao_produto, cor, estoque_min, custo, preco,cod_un_medida, cod_categoria },
    },
  });
};
