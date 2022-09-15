import React, {useEffect, useState} from "react";
import axios from "axios";
import {Link, useParams, useNavigate} from 'react-router-dom';
import removeFromDom from './Main'



const Detail = (props) => {
    const [product, setProduct] = useState({})
    const {id} = useParams();
    const navigate = useNavigate();

    const deleteProduct = (productId) => {
        console.log(productId)
        axios.delete('http://localhost:8000/api/products/' + productId)
        .then(res => {
            navigate('/')
        })
        .catch(err => console.error(err));

    }
    useEffect(() => {
        axios.get('http://localhost:8000/api/products/' + id)
        .then(res => setProduct(res.data))
        .catch(err => console.log(err));
    }, [id]);

    return (
        <div>
            <h1>{product.title}</h1>
            <p>{product.price}</p>
            <p>{product.description}</p>
            <Link to={"/products/" + product._id + "/edit"}>Update</Link>
            <button onClick={(e) => {
                deleteProduct(product._id)
            }}>Delete</button>
        </div>
    )
}
export default Detail;