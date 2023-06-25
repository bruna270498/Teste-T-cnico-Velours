const ServiceProduto = require("../services/produto");

class ControllerProduto {
    constructor(serviceProduto = new ServiceProduto()) {
        this.serviceProduto = serviceProduto;
        this.findAll = this.findAll.bind(this);
        this.findBy = this.findBy.bind(this);
        this.update = this.update.bind(this);
        this.newProduct = this.newProduct.bind(this);
        this.productDelete = this.productDelete.bind(this);
    }
    async findAll(_req, res) {
        const allProdutos = await this.serviceProduto.findAll();
        return res.status(200).json(allProdutos);
    }
    async findBy(req, res) {
        const { id } = req.params;
        const produto = await this.serviceProduto.findBy(+id);
        res.status(200).json(produto);
    }
    async update(req, res) {
        const { id } = req.params;
        const produto = await this.serviceProduto.update(+id, req.body);
        return res.status(204).json(produto);
    }
    async newProduct(req, res) {
        const productNew = await this.serviceProduto.newProduct(req.body);
        return res.status(201).json(productNew);
    }
    async productDelete(req, res) {
        const { id } = req.params;
        await this.serviceProduto.productDelete(+id);
        return res.status(204).json({message: 'Produto deletado com sucesso'});
    }
}

module.exports = ControllerProduto;