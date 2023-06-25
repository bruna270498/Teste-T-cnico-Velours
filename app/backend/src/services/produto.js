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
    async update(id, infoProduto) {
        const produto = await this.model.findByPk(id);
        produto.name = infoProduto.name;
        produto.price = infoProduto.price;
        produto.tipo = infoProduto.tipo;
        produto.description = infoProduto.description;
        const update = await produto.save();
        return update;
    }
    async newProduct({name, price, tipo, description}) {
        const productNew = await this.model.create({name, price, tipo, description});
        return productNew;
    }
    async productDelete(id) {
        const product = await this.model.findByPk(id);
        await produto.destroy();
    }
};

module.exports = ServiceProduto;