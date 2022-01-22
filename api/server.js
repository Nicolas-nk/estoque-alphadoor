/**
 * arquivo: server.js
 * descrição: arquivo responsável pela configuração e execução do back-end
 * data: 22/01/22
 * autor: Nicolas Messias
 */

const app = require('./src/app');

const port = process.eventNames.PORT || 3000;

app.listen(port, () => {
    console.log('aplicação sendo executada na porta: ', port);
});