const { Router } = require('express');
const ControllerProduto = require('../controllers/produto');
const productNotFound = require('../middlewares')

routerProduto = Router();
produtoController = new ControllerProduto();

routerProduto.get('/', produtoController.findAll);
routerProduto.get('/:id', productNotFound, produtoController.findBy);
routerProduto.put('/:id', productNotFound, produtoController.update);
routerProduto.post('/', produtoController.newProduct);
routerProduto.delete('/:id', productNotFound, produtoController.productDelet)


module.exports = routerProduto;