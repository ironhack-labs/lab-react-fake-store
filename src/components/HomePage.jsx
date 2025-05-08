import React, {useState, useEffect} from 'react';
import axios from 'axios';
import {Link} from 'react-router-dom'

export default function HomePage() {
const [products, setProducts] = useState([]);

useEffect(() => {
    axios.get("https://fakestoreapi.com/products")
        .then((response) => {
            setProducts(response.data);
        })
        .catch((error) => {
            console.error(error);
        });
}, [])

return (
    <div>
        <ul>
        {products.map((product) => (

                <li key={product.id}>
                    <h2>
                        <b>{product.title}</b>
                    </h2>
                    <Link to={`/product/details/${product.id}`}>
                    <img src={product.image} alt={product.title} width="100"/>
                    </Link>
                    <p>{product.price} $</p>
                    </li>
        ))}
        </ul>
    </div>
)
}
