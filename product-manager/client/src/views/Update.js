import { useEffect, useState } from 'react';
import axios from 'axios';
import {useParams, useNavigate} from "react-router-dom";

const Update = (props) => {
    const {id} = useParams();
    const [title, setTitle] = useState('');
    const [price, setPrice] = useState('');
    const [description, setDescription] = useState('');
    const navigate = useNavigate();

    useEffect(() => {
        axios.get('http://localhost:8000/api/products/' + id)
        .then(res => {
            setTitle(res.data.title);
            setPrice(res.data.price);
            setDescription(res.data.description);
        })
    }, [id]);

    const updateProduct = (e) => {
        e.preventDefault();
        axios.put('http://localhost:8000/api/products/' + id, {
            title,
            price,
            description
        })
        .then(res => {console.log(res); navigate('/')})
        .catch(err => console.error(err))
    }

    return (
        <div>
            <h1>Update a Product</h1>
            <form onSubmit={updateProduct}>
                <p>
                    <label>Title: </label>
                    <input type="text" name="title" value={title} onChange={(e) => {setTitle(e.target.value)}} />
                </p>
                <p>
                    <label>Price: </label>
                    <input type="text" name="price" value={price} onChange={(e) => {setPrice(e.target.value)}} />
                </p>
                <p>
                    <label>Description: </label>
                    <input type="text" name="description" value={description} onChange={(e) => {setDescription(e.target.value)}} />
                </p>
                <button>Update</button>
            </form>
        </div>
    )
}

export default Update;