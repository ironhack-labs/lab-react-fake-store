import React from 'react';


const ProductCard = ({ _id, image, title, price, category, description }) => {

    return (
        <div className="card">

            <h3>{_id}</h3>
            <img src={image} alt="product" />
            <h3>{title}</h3>
            <p>{category}</p>
            <p>€ {price}</p>
            <p>{description}</p>

        </div>
    )
}

export default ProductCard