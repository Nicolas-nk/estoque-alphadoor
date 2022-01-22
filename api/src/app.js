/**
 * arquivo: app.js
 * descrição: arquivo responsável por fazer a conexão com o arquivo 'server.js'
 * data: 22/01/22
 * autor: Nicolas Messias
 */

const express = require('express');
const cors = require('cors');

const app = express();

// Rotas da API:
const index = require('./routes/index');

const suppllierRoute = require('./routes/supplier.routes');
const productRoute = require('./routes/product.routes');
const catpRoute = require('./routes/catp.routes');
const unmtRoute = require('./routes/unm.routes');
const inputRoute = require('./routes/input.routes');
const outputRoute = require('./routes/output.routes');

app.use(express.urlencoded({extended: true}));
app.use(express.json());
app.use(express.json({type: 'application/vnd.api+json'}));
app.use(cors());

app.use(index);
app.use('/api/', suppllierRoute);
app.use('/api/', productRoute);
app.use('/api/', catpRoute);
app.use('/api/', unmtRoute);
app.use('/api/', inputRoute);
app.use('/api/', outputRoute);

module.exports = app;