import { useState, useEffect } from "react";
import { Routes, Route, useParams } from "react-router-dom";
import axios from "axios";

function ProductDetailsPage() {
  let { productId } = useParams();
  const apiURL = `https://fakestoreapi.com/products/${productId}`;
  // The state variable `product` is currently an empty object {},
  // but you should use it to store the response from the Fake Store API (the product details).

  const [product, setProduct] = useState({});

  useEffect(() => {
    //console.log("useEffect - Initial render (Mounting)");
    axios.get(apiURL).then((response) => {
      setProduct(response.data);
    });
  }, [productId]);

  // The `productId` coming from the URL parameter is available in the URL path.
  // You can access it with the `useParams` hook from react-router-dom.

  // To fetch the product details, set up an effect with the `useEffect` hook:

  return (
    <div className="ProductDetailsPage">
      {/* Render product details here */}
      <div key={product._id} className="card">
        <img src={product.image} alt="productimage" />
        <h3>{product.title}</h3>
        <p>{product.category}</p>
        <p>${product.price}</p>
        <p>{product.description}</p>
      </div>
    </div>
  );
}

export default ProductDetailsPage;
