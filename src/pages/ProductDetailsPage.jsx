import { useEffect, useState } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";
import "./ProductDetails.css";

function ProductDetailsPage() {
  // The state variable `product` is currently an empty object {},
  // but you should use it to store the response from the Fake Store API (the product details).
  const [product, setProduct] = useState({});
  const { productId } = useParams();

  useEffect(() => {
    fetchProduct(productId);
  }, [productId]);

  async function fetchProduct(id) {
    try {
      const response = await axios.get(
        `https://fakestoreapi.com/products/${id}`
      );
      console.log(response.data);
      setProduct(response.data);
    } catch (error) {
      console.log(error);
    }
  }

  if (!product) {
    return <p>No such product</p>;
  }
  // The `productId` coming from the URL parameter is available in the URL path.
  // You can access it with the `useParams` hook from react-router-dom.

  // To fetch the product details, set up an effect with the `useEffect` hook:

  return (
    <div className="ProductDetails">
      <img className="image" src={product.image} alt="" />
      <div className="category">{product.category}</div>
      <h2>
        <strong>{product.title}</strong>
      </h2>
      <div className="info">
        <p>{product.description}</p>
        <p className="price">${product.price}</p>
      </div>
      <Link to="/">
        <button className="back">Back</button>
      </Link>
    </div>
  );
}

export default ProductDetailsPage;
