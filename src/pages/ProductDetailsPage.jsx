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


import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from 'axios';

function ProductDetailsPage() {
  const [product, setProduct] = useState({});
  const { productId } = useParams();

  useEffect(() => {
    const fetchProductDetails = async () => {
      try {
        const response = await axios.get(`https://fakestoreapi.com/products/${productId}`);
        setProduct(response.data);
      } catch (error) {
        console.error('Error fetching product details:', error);
      }
    };

    fetchProductDetails();
  }, [productId]); // Trigger effect when productId changes

  return (
    <div className="ProductDetailsPage">
      <h1>Product Details</h1>
      <div>
        <h2>{product.title}</h2>
        <img src={product.image} alt={product.title} />
        <p><strong>Category:</strong> {product.category}</p>
        <p><strong>Price:</strong> ${product.price}</p>
        <p>{product.description}</p>
      </div>
    </div>
  );
}

export default ProductDetailsPage;
