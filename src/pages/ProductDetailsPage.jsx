import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

function ProductDetailsPage() {
  const { productId } = useParams(); // 1️⃣ Get the productId from the URL
  const [product, setProduct] = useState(null); // Start with null

  useEffect(() => {
    // 2️⃣ Fetch product details based on the productId
    fetch(`https://fakestoreapi.com/products/${productId}`)
      .then((res) => res.json())
      .then((data) => setProduct(data)) // 3️⃣ Save the product data in state
      .catch((err) => console.error("Error fetching product:", err));
  }, [productId]);

  if (!product) return <p>Loading product details...</p>; // Show loading while fetching

  return (
    <div className="ProductDetailsPage">
      <h1>{product.title}</h1>
      <img
        src={product.image}
        alt={product.title}
        style={{ width: "250px", margin: "20px 0" }}
      />
      <p>{product.description}</p>
      <div>
        <strong>Category:</strong> {product.category}
      </div>
      <div>
        <strong>Price:</strong> €{product.price}
      </div>
    </div>
  );
}

export default ProductDetailsPage;
