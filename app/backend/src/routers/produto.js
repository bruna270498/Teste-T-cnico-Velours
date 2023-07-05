const { Router } = require('express');
const ControllerProduto = require('../controllers/produto');
// Corrigir o caminho do controlador
const productNotFound = require('../middlewares/validacoes')

const produtoController = new ControllerProduto();
routerProduto = Router();

routerProduto.get('/', produtoController.findAll);
routerProduto.get('/:id', productNotFound, produtoController.findBy);
routerProduto.put('/:id', productNotFound, produtoController.update);
routerProduto.post('/', produtoController.newProduct);
routerProduto.delete('/:id', productNotFound, produtoController.productDelete);

module.exports = routerProduto;
