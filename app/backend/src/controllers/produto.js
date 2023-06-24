const ServiceProduto = require("../services/produto");

class ControllerProduto {
    constructor(serviceProduto = new ServiceProduto()) {
        this.serviceProduto = serviceProduto;
        this.findAll = this.findAll.bind(this);
        this.findBy = this.findBy.bind(this);
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
}

module.exports = ControllerProduto;