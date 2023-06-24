const { Router } = require('express');
const ControllerProduto = require('../controllers/produto');

routerProduto = Router();
produtoController = new ControllerProduto();

routerProduto.get('/', produtoController.findAll)
routerProduto.get('/:id', produtoController.findBy)

module.exports = routerProduto;