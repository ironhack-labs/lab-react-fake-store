import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import ProductDetails from "./ProductDetails.css";

function ProductDetailsPage() {
  // The state variable `product` is currently an empty object {},
  // but you should use it to store the response from the Fake Store API (the product details).
  const [product, setProduct] = useState({});

  // The `productId` coming from the URL parameter is available in the URL path.
  // You can access it with the `useParams` hook from react-router-dom.
  const { productId } = useParams();

  // To fetch the product details, set up an effect with the `useEffect` hook:
  useEffect(() => {
    axios
      .get(`https://fakestoreapi.com/products/${productId}`)
      .then((res) => setProduct(res.data))
      .catch((err) => console.error(err));
  }, [productId]);

  return (
    <div className="product-details">
      {/* Render product details here */}
      <img src={product.image} alt="" />
      <h2>
        <strong>{product.title}</strong>
      </h2>
      <p>{product.category}</p>
      <p>{`${product.price}$`}</p>
      <p>{product.description}</p>
    </div>
  );
}

export default ProductDetailsPage;
