/*import { useState } from "react";*/

import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";


function ProductDetailsPage() {
  // The state variable `product` is currently an empty object {},
  // but you should use it to store the response from the Fake Store API (the product details).
  const { productId } = useParams();
  const [product, setProduct] = useState(null);



  // The `productId` coming from the URL parameter is available in the URL path.
  // You can access it with the `useParams` hook from react-router-dom.


  // To fetch the product details, set up an effect with the `useEffect` hook:


  useEffect(() => {
    fetch(`https://fakestoreapi.com/products/${productId}`)
      .then((response) => response.json())
      .then((data) => setProduct(data))
      .catch((error) => console.log(error));
  }, [productId]);

  if (!product) {
    return <p>Loading...</p>;
  }

  return (
    <div className="ProductDetailsPage">
    {/* Render product details here */}
    <h1>{product.title}</h1>
      <img src={product.image} alt={product.title} />
      <p>{product.description}</p>
      <h3>${product.price}</h3>
      <p>Category: {product.category}</p>
      <Link to="/">
        <button>Back</button>
      </Link>
    </div>
  );
}
export default ProductDetailsPage;
