const Produto = require('../db/models/produto');

class ServiceProduto {
    model =  Produto;
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
        produto.image = infoProduto.image;
        const update = await produto.save();
        return update;
    }
    async newProduct({name, price, tipo, description, image}) {
        const productNew = await this.model.create({name, price, tipo, description, image});
        return productNew;
    }
    async productDelete(id) {
        const product = await this.model.findByPk(id);
        await product.destroy();
    }
};

module.exports = ServiceProduto;