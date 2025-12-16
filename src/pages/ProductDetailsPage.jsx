import { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";

function ProductDetailsPage() {
  const { productId } = useParams(); // URL se ID milti hai
  const [product, setProduct] = useState(null);

  useEffect(() => {
    fetch(`https://fakestoreapi.com/products/${productId}`)
      .then((res) => res.json())
      .then((data) => setProduct(data))
      .catch((err) => console.log("Error:", err));
  }, [productId]);

  if (!product) return <p>Loading product details...</p>;

  return (
    <div style={{ padding: "20px" }}>
      <h1>{product.title}</h1>

      <img
        src={product.image}
        alt={product.title}
        style={{
          width: "200px",
          height: "200px",
          objectFit: "contain",
          marginBottom: "20px",
        }}
      />

      <p>
        <strong>Price:</strong> ${product.price}
      </p>
      <p>
        <strong>Category:</strong> {product.category}
      </p>
      <p>
        <strong>Description:</strong> {product.description}
      </p>

      <br />

      {/* BACK BUTTON */}
      <Link to="/">
        <button
          style={{
            padding: "8px 16px",

            borderRadius: "10px",
            backgroundColor: "blue",
            color: "white",
          }}
        >
          Back to Products
        </button>
      </Link>
    </div>
  );
}

export default ProductDetailsPage;
