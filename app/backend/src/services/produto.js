const Produto = require('../db/models/produto');

class ServiceProduto {
    model = new Produto()
    constructor() {
        this.model = Produto;
    }
    async findAll() {
        const allProduto = await this.model.findAll();
        return allProduto;
    }
    async findBy(id) {
        const produto = await this.model.findByPk(id);
        return produto;
    }
};

module.exports = ServiceProduto;