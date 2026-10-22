import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";

function ProductDetailsPage() {
  const { productId } = useParams();   // ← ID desde la URL
  const [product, setProduct] = useState(null);

  useEffect(() => {
    fetch(`https://fakestoreapi.com/products/${productId}`)
      .then((response) => response.json())
      .then((data) => {
        setProduct(data);   // Save product details in state
      })
      .catch((error) => {
        console.error("Error fetching product:", error);
      });
  }, [productId]); // Runs again if the URL changes

  if (!product) {
    return <p>Loading product details...</p>;
  }

  return (
    <div className="ProductDetailsPage">
      <h1>{product.title}</h1>

      <img
        src={product.image}
        alt={product.title}
        style={{ width: "200px" }}
      />

      <p><strong>Price:</strong> {product.price} €</p>
      <p><strong>Category:</strong> {product.category}</p>
      <p>{product.description}</p>
    </div>
  );
}

export default ProductDetailsPage;
