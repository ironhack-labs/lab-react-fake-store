import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import axios from "axios";

function ProductDetailsPage() {
  const param = useParams();

  const [product, setProduct] = useState({});

  const dataProduct = async () => {
    try {
      const response = await axios.get(
        `https://fakestoreapi.com/products/${param.productId}`,
      );
      setProduct(response.data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    dataProduct();
  }, [param.productId]);

  return (
    <div
      className="ProductDetailsPage"
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        padding: "40px 20px",
      }}
    >
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          maxWidth: "500px",
          width: "100%",
          border: "1px solid #ddd",
          borderRadius: "10px",
          padding: "24px",
          boxShadow: "0 2px 8px rgba(0,0,0,0.1)",
          gap: "16px",
        }}
      >
        <img
          src={product.image}
          alt={product.title}
          style={{ width: "220px", height: "220px", objectFit: "contain" }}
        />
        <div style={{ fontWeight: "bold", fontSize: "20px", textAlign: "center" }}>
          {product.title}
        </div>
        <div style={{ fontSize: "14px", color: "#555", textAlign: "center" }}>
          {product.description}
        </div>
        <div style={{ fontWeight: "bold", fontSize: "18px" }}>
          {product.price} €
        </div>
        <Link
          to="/"
          style={{
            marginTop: "10px",
            padding: "10px 20px",
            backgroundColor: "#333",
            color: "white",
            textDecoration: "none",
            borderRadius: "6px",
          }}
        >
          ← Back
        </Link>
      </div>
    </div>
  );
}

export default ProductDetailsPage;