import "./ProductCard.css";
import { Link } from "react-router-dom";

function ProductCard({ product }) {
  return (
    <>
      <Link product={product} to={`/product/details/${product.id}`}>
        <article className="container" key={product.id}>
          <img src={product.image} alt="product img" />
          <h2>
            <strong>{product.title}</strong>
          </h2>
          <p>{product.category}</p>
          <p>{product.price}</p>
          <p>{product.description}</p>
        </article>
      </Link>
    </>
  );
}
export default ProductCard;
