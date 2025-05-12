import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";

function ProductDetailsPage() {
  // 1. Get the product ID from the URL (e.g., /product/details/5 → productId = 5)
  const { productId } = useParams();

  // 2. Create a state variable to store the product details
  const [product, setProduct] = useState(null);

  // 3. Fetch the single product using the product ID
  useEffect(() => {
    fetch(`https://fakestoreapi.com/products/${productId}`)
      .then((res) => res.json())
      .then((data) => {
        setProduct(data); // Save the product in state
      })
      .catch((err) => console.error("Error fetching product:", err));
  }, [productId]);

  // 4. Show loading while the product is being fetched
  if (!product) return <p>Loading...</p>;

  // 5. Render the single product's details
  return (
    <div className="card" style={{ maxWidth: "600px", margin: "2rem auto" }}>
      <div style={{ display: "flex", gap: "16px" }}>
        <img
          src={product.image}
          alt={product.title}
          style={{ width: "150px", objectFit: "contain" }}
        />
        <div>
          <h2>{product.title}</h2>
          <p><strong>Category:</strong> {product.category}</p>
          <p><strong>Price:</strong> {product.price}€</p>
          <p>{product.description}</p>
        </div>
      </div>
    </div>
  );
}

export default ProductDetailsPage;
