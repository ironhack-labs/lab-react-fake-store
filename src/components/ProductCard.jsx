import "./ProductCard.css";
import { Link } from "react-router-dom";

export const ProductCard = ({ eachProduct }) => {


  
  return (
    
    <li className="card">
        <Link to={`/product/details/${eachProduct.id}
`}>
      <img className="product-image"src={eachProduct.image} alt="Prodcut image" />
      </Link>
      <h3>{eachProduct.title}</h3>
      <h4>{eachProduct.category}</h4>
      <h4>{eachProduct.price} </h4>
      <h5>{eachProduct.description}</h5>
    </li>
  );
};