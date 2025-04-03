import { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";

function ProductDetailsPage() {
  // The state variable `product` is currently an empty object {},
  // but you should use it to store the response from the Fake Store API (the product details).
  const [product, setProduct] = useState({});

  // The `productId` coming from the URL parameter is available in the URL path.
  // You can access it with the `useParams` hook from react-router-dom.
  const { productId } = useParams();

  // To fetch the product details, set up an effect with the `useEffect` hook:
  useEffect(() => {
    fetch(`https://fakestoreapi.com/products/${productId}`)
      .then(response => response.json())
      .then(data => setProduct(data))
      .catch(error => console.error("Error fetching product details:", error));
  }, [productId]);

  return (
    <div>
      <h1>{product.title}</h1>
      {product.image && <img src={product.image} alt={product.title} width="200" />}
      <p><strong>Price:</strong> ${product.price}</p>
      <p><strong>Category:</strong> {product.category}</p>
      <p><strong>Description:</strong> {product.description}</p>
      <p><strong>Rating:</strong> {product.rating?.rate} ({product.rating?.count} reviews)</p>
      <Link to="/">
        <button>Back to Products</button>
      </Link>
    </div>
  );
}

export default ProductDetailsPage;
