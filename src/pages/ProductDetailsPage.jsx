import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

function ProductDetailsPage() {
  // The state variable product is currently an empty object {},
  // but you should use it to store the response from the Fake Store API (the product details).
  const [product, setProduct] = useState({});

  // The productId coming from the URL parameter is available in the URL path.
  // You can access it with the useParams hook from react-router-dom.
  const { productId } = useParams();

  // To fetch the product details, set up an effect with the useEffect hook:
  useEffect(() => {
    fetch(`https://fakestoreapi.com/products/${productId}`)
      .then((res) => res.json())
      .then((data) => setProduct(data))
      .catch((err) => console.error("Error fetching product details:", err));
  }, [productId]); // Adding productId here ensures it re-fetches if the ID changes

  return (
    <div className="ProductDetailsPage">
      {/* Render product details here */}
      <h1>{product.title}</h1>
      <p>${product.price}</p>
      <p>{product.description}</p>
    </div>
  );
}

export default ProductDetailsPage;