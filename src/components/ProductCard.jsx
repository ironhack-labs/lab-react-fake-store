import { Link } from "react-router-dom";

function ProductCard({ product }) {
  return (
    <Link
      to={`/product/details/${product.id}`}
      style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        padding: "20px",
        border: "1px solid #e0e0e0",
        borderRadius: "10px",
        background: "white",
        textDecoration: "none",
        color: "inherit",
        gap: "20px",
      }}
    >
      
      <div style={{ width: "120px", display: "flex", justifyContent: "center" }}>
        <img
          src={product.image}
          alt={product.title}
          style={{ height: "120px", objectFit: "contain" }}
        />
      </div>

      
      <div style={{ flex: 2 }}>
        <h3 style={{ margin: 0, fontSize: "1.1rem", fontWeight: "600" }}>
          {product.title}
        </h3>
        <p style={{ margin: "5px 0", color: "#666" }}>{product.category}</p>
      </div>

      
      <div style={{ width: "120px", textAlign: "center" }}>
        <strong>${product.price}</strong>
      </div>

      
      <div style={{ flex: 3, color: "#666" }}>
        {product.description.slice(0, 80)}...
      </div>
    </Link>
  );
}

export default ProductCard;
