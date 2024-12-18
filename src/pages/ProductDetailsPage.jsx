// import { useState } from "react";


// function ProductDetailsPage() {
//   // The state variable `product` is currently an empty object {},
//   // but you should use it to store the response from the Fake Store API (the product details).
//   const [product, setProduct] = useState({});


//   // The `productId` coming from the URL parameter is available in the URL path.
//   // You can access it with the `useParams` hook from react-router-dom.


//   // To fetch the product details, set up an effect with the `useEffect` hook:



//   return (
//     <div className="ProductDetailsPage">
//     {/* Render product details here */}
//     </div>
//   );
// }

// export default ProductDetailsPage;

import { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";

function ProductDetailsPage() {
  const [product, setProduct] = useState(null);
  const { productId } = useParams(); // Get productId from the URL parameter

  useEffect(() => {
    // Fetch product details by ID from the Fake Store API
    fetch(`https://fakestoreapi.com/products/${productId}`)
      .then((res) => res.json())
      .then((data) => setProduct(data))
      .catch((error) => console.error("Error fetching product details:", error));
  }, [productId]);

  if (!product) return <p>Loading...</p>;

  return (
    <div className="ProductDetailsPage">
      <h1>{product.title}</h1>
      <img src={product.image} alt={product.title} width="200" />
      <p>Category: {product.category}</p>
      <p>Description: {product.description}</p>
      <h3>Price: ${product.price}</h3>
      <Link to="/" style={{ textDecoration: "none", color: "blue" }}>Back to Product List</Link>
    </div>
  );
}

export default ProductDetailsPage;
