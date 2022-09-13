const {Product} = require('../models/product.model')

const createProduct = async (data) => {
    const product = await Product.create(data);
    return product
}

module.exports = {createProduct}