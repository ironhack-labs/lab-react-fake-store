import React from "react";
import { Link } from "react-router-dom";

const ProductCard = ({ product }) => (
  <div className="product-card">
    <h3>{product.title}</h3>
    <img src={product.image} alt={product.title} width="100" />
    <p>${product.price}</p>
    <Link to={`/product/details/${product.id}`}>Ver detalles</Link>
  </div>
);

export default ProductCard;
