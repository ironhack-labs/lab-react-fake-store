import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

function ProductDetailsPage() {
  // The state variable `product` is currently an empty object {},
  // but you should use it to store the response from the Fake Store API (the product details).
  const [product, setProduct] = useState({});

  const { productId } = useParams();

  useEffect(() => {
    const fetchProductDetails = async () => {
      try {
        const response = await fetch(
          `https://fakestoreapi.com/products/${productId}`
        );
        const parsed = await response.json();
        setProduct(parsed);
      } catch (error) {
        console.error("Error fetching product details:", error);
      }
    };

    fetchProductDetails();
  }, [productId]);

  return (
    <div
      className="ProductDetailsPage"
      style={{
        display: "flex",
        justifyContent: "space-between",
      }}
    >
      <img
        src={product.image}
        alt={product.title}
        style={{ width: "500px", height: "auto", marginRight: "40px" }}
      />
      <h2 style={{ marginRight: "40px", fontWeight: "bold" }}>
        {product.title}
      </h2>
      <p style={{ marginRight: "40px" }}>{product.description}</p>
      <p style={{ marginRight: "40px" }}>Category: {product.category}</p>
      <p style={{ marginRight: "40px" }}>Price: ${product.price}</p>
    </div>
  );
}

export default ProductDetailsPage;
