import "./ProductDetailsCard.css";
import { Link } from "react-router-dom";

export const ProductDetailsCard = ({ product }) => {
  return (
    <div className="card-details">
        <img className="product-image"
          src={product.image}
          alt="Prodcut image"/>
      <div className="container">
      <h3>{product.title}</h3>
      <h4>{product.category}</h4>
      <h4>{product.price} </h4>
      <h5>{product.description}</h5>
      <Link to="/">
      <button className="back-btn">Back</button>
      </Link>
    </div>
    </div>
  );
};
