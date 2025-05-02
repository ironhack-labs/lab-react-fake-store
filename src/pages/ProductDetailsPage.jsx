// ProductDetailsPage.jsx
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

function ProductDetailsPage() {
  const [product, setProduct] = useState({});
  const { productId } = useParams(); // Get the product ID from the URL

  useEffect(() => {
    fetch(`https://fakestoreapi.com/products/${productId}`)
      .then((response) => response.json())
      .then((data) => setProduct(data))
      .catch((error) => console.error("Error fetching product:", error));
  }, [productId]); // Dependency array ensures this runs when productId changes

  return (
    <div className="ProductDetailsPage container">
      <h1>Product Details</h1>
      {product && (
        <div className="product-detail card">
          <img src={product.image} alt={product.title} className="product-image" />
          <h2>{product.title}</h2>
          <p>{product.description}</p>
          <p>${product.price}</p>
          <button className="btn-primary">Add to Cart</button>
        </div>
      )}
    </div>
  );
}

export default ProductDetailsPage;
