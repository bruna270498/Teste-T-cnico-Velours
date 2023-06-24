const express = require('express');
require('express-async-errors');
const routerProduto = require('./routers/produto');

const app = express();

app.get('/', (_request, response) => {
  response.send();
});

app.use(express.json());

app.use('/produto', routerProduto);

module.exports = app;