import { useNavigate } from "react-router-dom";

function ProductItem({ product }) {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate(`/product/${product.id}`);
  };
  return (
    <div className="card h-100"  onClick={handleClick}>
      <img className="card-img-top" src={product.image} alt={product.title} />
      <div className="card-body">
        <p className="card-text">{product.title}</p>
        <p className="card-text">{product.category}</p>
        <p className="card-text">{product.price}</p>
        <p className="card-text">{product.description}</p>
      </div>
    </div>
  );
}

export default ProductItem;
