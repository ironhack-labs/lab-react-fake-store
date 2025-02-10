import { useState, useEffect } from "react";
import { useParams } from "react-router-dom"; // Import useParams to get the product ID from the URL
import axios from "axios";

function ProductDetailsPage() {
  const [product, setProduct] = useState({});
  const { productId } = useParams(); // Get productId from the URL params

  useEffect(() => {
    // Fetch product details using the productId from the URL
    axios
      .get(`https://fakestoreapi.com/products/${productId}`)
      .then((response) => {
        setProduct(response.data);
      })
      .catch((error) => {
        console.error("Error fetching product details:", error);
      });
  }, [productId]); // Re-fetch when productId changes

  return (
    <div className="ProductDetailsPage">
      {product.title ? (
        <div>
          <h1>{product.title}</h1>
          <img src={product.image} alt={product.title} width={200} />
          <p>{product.description}</p>
          <p>Price: ${product.price}</p>
          <p>Category: {product.category}</p>
        </div>
      ) : (
        <p>Loading product details...</p>
      )}
    </div>
  );
}

export default ProductDetailsPage;
