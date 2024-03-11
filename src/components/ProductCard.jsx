import { Link } from "react-router-dom";

import "./ProductCard.css";

export const ProductCard = ({ product }) => {
  return (
    <Link to="/">
      <div className="product-card">
        <img src={product.image} className="image"></img>
        <h2>{product.title}</h2>
        <p>{product.description}</p>
      </div>
    </Link>
  );
};
