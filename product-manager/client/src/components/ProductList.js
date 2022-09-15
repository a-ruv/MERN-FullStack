import axios from 'axios';
import React from 'react';
import { Link, useNavigate } from 'react-router-dom'

const ProductList = (props) => {
    const { removeFromDom} = props;
    const navigate = useNavigate();


    const deleteProduct = (productId) => {
        console.log(productId)
        axios.delete('http://localhost:8000/api/products/' + productId)
        .then(res => {
            removeFromDom(productId)
            navigate('/')
        })
        .catch(err => console.error(err));

    }

    return (
        <div>
            {
                props.products.map((product, i) => {
                    return (
                        <p key={i}>
                            <Link to={`/products/${product._id}`}>{product.title}</Link>
                            |
                            <button onClick={(e) => {deleteProduct(product._id)}}>Delete</button>
                            |
                            <button onClick={(e) => {navigate(`/products/${product._id}/edit`)}}>Update</button>
                        </p>)
                    })
            }
        </div>
    )
}
export default ProductList;
