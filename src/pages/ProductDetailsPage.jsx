import { useState, useEffect } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";

function ProductDetailsPage() {
  // The state variable `product` is currently an empty object {},
  // but you should use it to store the response from the Fake Store API (the product details).
  const [product, setProduct] = useState({});

  // The `productId` coming from the URL parameter is available in the URL path.
  // You can access it with the `useParams` hook from react-router-dom.

  // To fetch the product details, set up an effect with the `useEffect` hook:

  let { productId } = useParams();

  const singleProductBring = async () => {
    try {
      const response = await axios.get(
        `https://fakestoreapi.com/products/${productId}`
      );
      console.log(response);
      setProduct(response.data);
    } catch (error) {
      console.log(error);
    }
  };
  // To fetch the product details, set up an effect with the `useEffect` hook:

  useEffect(() => {
    singleProductBring();
  }, [productId]);

  return (
    <div className="ProductDetailsPage">
      {/* Render product details here */}
      <li>
        <img src={product.image} />
        <h2>{product.title}</h2>
        <h2>${product.price} CA</h2>
        <h2>{product.description}</h2>
        <h2>{product.category}</h2>
      </li>
    </div>
  );
}

export default ProductDetailsPage;
