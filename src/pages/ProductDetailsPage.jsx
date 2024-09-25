import axios from "axios";
import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";

function ProductDetailsPage() {
  const [product, setProduct] = useState({});

  const { productId } = useParams();

  const getProduct = async () => {
    try {
      const res = await axios.get(
        `https://fakestoreapi.com/products/${productId}`
      );
      setProduct(res.data);
    } catch (error) {
      throw new Error(`Response error ${error.status}`);
    }
  };
  useEffect(() => {
    getProduct();
  }, []);

  return (
    <>
      <div className="productDetailsPage">
        <img
          src={product.image}
          alt=""
          style={{
            height: "250px",
            width: "250px",
            flex: 1,
            border: "1px solid #d4d3d5",
            padding: "5px",
            marginBottom: "1em",
          }}
        />
        <p
          style={{
            flex: 1,
            backgroundColor: "blue",
            color: "#fff",
            width: "120px",
            padding: "5px",
            fontSize: "0.8em",
            borderRadius: "7px",
            marginBottom: "1em",
            textAlign: "center",
          }}
        >
          {product.category}
        </p>
        <p style={{ fontSize: "1.3em", marginBottom: "1em" }}>
          {product.title}
        </p>
        <div style={{ display: "flex", gap: "15px", marginBottom: "1em" }}>
          <p style={{ fontSize: "0.9em" }}>{product.description}</p>
          <p style={{ color: "#4b42e4", fontWeight: "bold" }}>
            {product.price}
          </p>
        </div>
      </div>
      <Link
        to="/"
        style={{
          backgroundColor: "#20bb50",
          fontWeight: "bold",
          color: "#fff",
          padding: "10px",
          borderRadius: "10px",
        }}
      >
        Back
      </Link>
    </>
  );
}

export default ProductDetailsPage;
