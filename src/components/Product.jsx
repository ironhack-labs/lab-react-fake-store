import React from 'react';
import { Link } from 'react-router-dom';

const Product = ({ product }) => {
    /* console.log(product); */
    return (
        <Link key={product.id}>
            <div className="ProductListPage">
                <img src={product.image} alt='a product' />
                <h3>{product.title}</h3>
                <p>{product.category}</p>
                <p>{product.price}</p>
                <p>{product.description}</p>
            </div>
        </Link>
    );
};

export default Product;