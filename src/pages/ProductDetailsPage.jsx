import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

function ProductDetailsPage() {
  // The state variable `product` is currently an empty object {},
  // but you should use it to store the response from the Fake Store API (the product details).
  const [product, setProduct] = useState({});
  const { productId } = useParams();
  const url = `https://fakestoreapi.com/products/${productId}`;

  console.log(productId);
  // The `productId` coming from the URL parameter is available in the URL path.
  // You can access it with the `useParams` hook from react-router-dom.

  // To fetch the product details, set up an effect with the `useEffect` hook:
  useEffect(() => {
    fetch(url)
      .then((res) => res.json())
      .then((data) => setProduct(data));
  }, [url]);

  return (
    <div className="ProductDetailsPage">
      <h1>{product.title}</h1>
      <img src={product.image}></img>
      <p>Category: {product.category}</p>
      <p>Price: {product.price}EUR</p>
      <p>{product.description}</p>
    </div>
  );
}

export default ProductDetailsPage;
