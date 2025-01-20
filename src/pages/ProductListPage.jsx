import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

function ProductListPage() {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await axios.get("https://fakestoreapi.com/products");
        setProducts(response.data);
        setLoading(false);
      } catch (err) {
        console.error("Error fetching products:", err);
        setError("Failed to fetch products. Please try again later.");
        setLoading(false);
      }
    };

    fetchProducts();
  }, []);

  if (loading) {
    return <p style={{ textAlign: "center", marginTop: "20px" }}>Loading...</p>;
  }

  if (error) {
    return <p style={{ textAlign: "center", color: "red" }}>{error}</p>;
  }

  return (
    <div style={{ padding: "20px" }}>
      <h1 style={{ textAlign: "center", marginBottom: "20px" }}>Products</h1>
      <div style={{ display: "grid", gap: "20px" }}>
        {products.map((product) => (
          <Link
            key={product.id}
            to={`/product/details/${product.id}`}
            style={{ textDecoration: "none", color: "inherit" }}
          >
            <div
              style={{
                display: "flex",
                gap: "20px",
                border: "1px solid #ccc",
                borderRadius: "8px",
                padding: "10px",
                alignItems: "center",
                boxShadow: "0 2px 4px rgba(0, 0, 0, 0.1)",
              }}
            >
              <img
                src={product.image}
                alt={product.title}
                style={{ maxWidth: "100px", maxHeight: "100px", objectFit: "contain" }}
              />
              <div>
                <h2 style={{ margin: "0 0 10px" }}>{product.title}</h2>
                <p style={{ margin: "0 0 5px", color: "#555" }}>{product.category}</p>
                <p style={{ margin: "0 0 5px", fontWeight: "bold" }}>${product.price}</p>
                <p style={{ margin: "0", fontSize: "0.9em", color: "#777" }}>
                  {product.description.slice(0, 100)}...
                </p>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}

export default ProductListPage;
