const {createProduct, getAllProducts, getProductById} = require('../services/product.service')

const handleCreateProduct = async (req, res) => {
    try {
        const product = await createProduct(req.body);
        return res.json(product)
    } catch (error){
        return res.status(400).json(error);
    }
};

const handleGetAllProducts = async (req, res) => {
    try {
        const products = await getAllProducts();
        return res.json(products)
    } catch (error){
        return res.status(400).json(error);
    }
};

const handleGetProductById = async (req, res) => {
    try {
        const product = await getProductById(req.params.id);
        console.log(product)
        return res.json(product)
    } catch (error){
        return res.status(400).json(error);
    }
};



module.exports = {handleCreateProduct, handleGetAllProducts, handleGetProductById};
