/**
 * arquivo: config/database.js
 * descrição: arquivo responsável pelas 'connectionStrings'
 * data: 22/01/22
 * autor: Nicolas Messias
 */

const mysql = require('mysql2');
const dotenv = require('dotenv');

dotenv.config()

// conexão com a base de dados
const pool = mysql.createPool({
  host: process.env.DB_HOST,
  port: process.env.DB_PORT,
  user: process.env.DB_USER,
  password: process.env.DB_USER,
  database: process.env.DB_NAME,
});

pool.on('error', function () {
    console.log('Problema inesperado na conexão com o banco de dados!');
    pool.end();
});

pool.on('connection', function () {
    console.log('Base de dados conectado com sucesso!');
  });

module.exports = {
    query: (text, params) => pool.query(text, params),
};
/** 
simple query
connection.query(
  'SELECT * FROM `table` WHERE `name` = "Page" AND `age` > 45',
  function(err, results, fields) {
    console.log(results); // results contains rows returned by server
    console.log(fields); // fields contains extra meta data about results, if available
  }
);

// with placeholder
connection.query(
  'SELECT * FROM `table` WHERE `name` = ? AND `age` > ?',
  ['Page', 45],
  function(err, results) {
    console.log(results);
  }
);

*/ 