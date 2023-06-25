const Produto = require('../db/models');

const model = new Produto();

const productNotFound = async (req, res, next) => {
    const { id } = req.params;
    const empty = await model.findByPk(+id);
    if(!empty) {
        return res.status(404).json({message: 'Product not found'})
    }
    return next();
};

module.exports = productNotFound;