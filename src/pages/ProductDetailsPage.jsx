import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";


function ProductDetailsPage() {
  // The state variable `product` is currently an empty object {},
  // but you should use it to store the response from the Fake Store API (the product details).
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);
  const {productId} = useParams();

  // The `productId` coming from the URL parameter is available in the URL path.
  // You can access it with the `useParams` hook from react-router-dom.

  // To fetch the product details, set up an effect with the `useEffect` hook:
  useEffect(() => {
    setLoading(true); 
    fetch(`https://fakestoreapi.com/products/${productId}`)
      .then((response) => response.json())
      .then((data) => {
        setProduct(data);
        setLoading(false); 
      })
      .catch((error) => {
        console.error("Error fetching product details:", error);
        setLoading(false); 
      });
  }, [productId]);

  if (loading) {
    return <p>Loading...</p>; 
  }

  if (!product) {
    return <p>Product not found!</p>; 
  }


  return (
    <div className="ProductDetailsPage">
    {/* Render product details here */}
    <h1>{product.title}</h1>
      <img src={product.image} alt={product.title}  style={{ width: "150px", height: "auto" }} />
      <p>{product.description}</p>
      <p>Price: ${product.price}</p>
      <p>Category: {product.category}</p>
      <button onClick={() => window.history.back()}>Back</button>
    </div>
  );
}

export default ProductDetailsPage;
