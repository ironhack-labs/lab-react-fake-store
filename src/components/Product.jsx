import { Link } from "react-router-dom";

function Product({ className = "", product }) {
  const { image, title, category, price, description,id } = product;
  return (
    <div className="d-flex flex-row">
      <Link to={`/product/details/${id}`}>
        <img src={image} alt={title} style={{ width: "100px" }} />
        <span>{title}</span>
        <span>{category}</span>
        <span>${price}</span>
        <span>{description}</span>
      </Link>
    </div>
  );
}
export default Product;
