import axios from "axios";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

function ProductListPage() {
  const [products, setProducts] = useState([]);

  const dataProduct = async () => {
    try {
      const response = await axios.get("https://fakestoreapi.com/products");
      setProducts(response.data);
    } catch (error) {}
  };

  useEffect(() => {
    dataProduct();
  }, []);

  return (
    <div
      className="ProductListPage"
      style={{
        display: "grid",
        gridTemplateColumns: "repeat(auto-fill, minmax(240px, 1fr))",
        gap: "24px",
        padding: "24px",
      }}
    >
      {products.map((product) => {
        return (
          <div
            key={product.id}
            style={{
              border: "1px solid #ddd",
              borderRadius: "10px",
              padding: "16px",
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              gap: "10px",
              boxShadow: "0 2px 8px rgba(0,0,0,0.1)",
            }}
          >
            <button>
               <Link to={`/product/details/${product.id}`}>See more</Link>
            </button>
            <img
              src={product.image}
              alt={product.title}
              style={{
                width: "180px",
                height: "180px",
                objectFit: "contain",
              }}
            />
            <div
              style={{
                fontWeight: "bold",
                fontSize: "16px",
                textAlign: "center",
              }}
            >
              {product.title}
            </div>
            <div
              style={{
                fontSize: "12px",
                color: "#888",
                textTransform: "uppercase",
              }}
            >
              {product.category}
            </div>
            <div
              style={{ fontSize: "13px", color: "#555", textAlign: "center" }}
            >
              {product.description}
            </div>
            <div
              style={{ fontWeight: "bold", fontSize: "16px", marginTop: "8px" }}
            >
              {product.price} €
            </div>
          </div>
        );
      })}
    </div>
  );
}

export default ProductListPage;
