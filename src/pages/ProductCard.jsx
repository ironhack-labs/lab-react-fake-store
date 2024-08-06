import "./Card.css";
import { Link } from "react-router-dom";

export default function ProductCard({ product }) {
  return (
    <div className="card">
      <Link to={`/product/details/${product.id}`}>
        <img src={product.image} alt={product.title} />
        <p className="product-title">{product.title}</p>
        <p className="product-category">{product.category}</p>
        <p className="product-price">${product.price}</p>
        <p className="product-desc">{product.description}</p>
      </Link>
    </div>
  );
}
