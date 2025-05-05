import { Link } from "react-router-dom";

const ProductCard = ({ product }) => {
  const style = {
    background: "white",
    width: "20%",
    margin: "20px",
    display: "flex",
    justifyContent: "center",
  };

  return (
    <Link to={`/product/details/${product.id}`}>
      <div
        className="ProductCard"
        style={{
          background: "white",
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          margin: "10px",
          height: "220px",
        }}
      >
        <div style={style}>
          <img
            style={{
              width: "10em",
              height: "10em",
              border: "1px solid lightgray",
              padding: "5px",
              objectFit: "cover",
            }}
            src={product.image || placeholderImage}
            alt={product.title}
          />
        </div>
        <div style={style}>
          <h3 style={{ fontWeight: "bold" }}>{product.title}</h3>
        </div>
        <div style={style}>
          <p>{product.category}</p>
        </div>
        <div style={style}>
          <p>${product.price}</p>
        </div>
        <div style={style}>
          <p>{product.description.substring(0, 50) + "..."}</p>
        </div>
      </div>
    </Link>
  );
};
export default ProductCard;
