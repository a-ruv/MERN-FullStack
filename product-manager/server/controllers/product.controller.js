const {createProduct} = require('../services/product.service')

const handleCreateProduct = async (req, res) => {
    try {
        const product = await createProduct(req.body);
        return res.json(product)
    } catch {
        return res.status(400).json(error);
    }
};

module.exports = {handleCreateProduct};
