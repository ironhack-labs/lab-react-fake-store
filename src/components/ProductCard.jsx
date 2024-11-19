import React from "react";
import { Link } from "react-router-dom";

const ProductCard = ({ id, image, title, category, price, description }) => {
  return (
    <Link to={`/product/details/${id}`}>
      <div className="card">
        <img src={image} alt="product image" />
        <div>{title}</div>
        <p>{category}</p>
        <div>{price}</div>
        <div>{description}</div>
      </div>
    </Link>
  );
};

export default ProductCard;
