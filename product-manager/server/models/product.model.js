const mongoose = require('mongoose');

const ProductSchema = new mongoose.Schema(
    {
        title:{
            type: String,
            required: [true, '{PATH} is required'],
            minlength: [2, '{PATH} must be at least {MINLENGTH} characters']
        },

        price: {
            type: Number,
        },

        description: {
            type: String,
            required: [true, '{PATH} is required'],
            minlength: [2, '{PATH} must be at least {MINLENGTH} characters']
        }
    }
);

const Product = mongoose.model('Product', ProductSchema);

module.exports = {Product}

