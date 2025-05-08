import { Link } from "react-router-dom";

function ProductCard({ product }) {
  return (
    <Link to={`/product/details/${product.id}`}>
      <div className="row d-flex align-items-center border rounded m-2 bg-light">
        <img
          className="col-3 img-thumbnail img-fluid rounded m-3"
          src={product.image}
          alt="..."
          style={{ width: "7.5rem", height: "7.5rem", objectFit: "cover" }}
        />
        <h6 className="col-2 fw-bold">{product.title}</h6>
        <p className="col-2 fw-medium">{product.category}</p>
        <p className="col-1 fw-medium">${product.price}</p>
        <p className="col fw-medium overflow-hidden">{product.description}</p>
      </div>
    </Link>
  );
}

export default ProductCard;
