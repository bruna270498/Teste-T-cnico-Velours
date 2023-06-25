const { Router } = require('express');
const ControllerProduto = require('../controllers/produto');

routerProduto = Router();
produtoController = new ControllerProduto();

routerProduto.get('/', produtoController.findAll);
routerProduto.get('/:id', produtoController.findBy);
routerProduto.put('/:id', produtoController.update);
routerProduto.post('/', produtoController.newProduct);
routerProduto.delete('/:id', produtoController.productDelet)


module.exports = routerProduto;