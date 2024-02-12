import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import axios from "axios";
import "../styles/ProductDetailsPage.css";



function ProductDetailsPage() {
  // The state variable `product` is currently an empty object {},
  // but you should use it to store the response from the Fake Store API (the product details).
  const [product, setProduct] = useState({});

  // The `productId` coming from the URL parameter is available in the URL path.
  // You can access it with the `useParams` hook from react-router-dom.
  const { productId } = useParams();
  const baseUrl = "https://fakestoreapi.com/products/" + productId;

  // To fetch the product details, set up an effect with the `useEffect` hook:
  useEffect(() => {
    axios.get(baseUrl).then((response) => {
      setProduct(response.data);
    });
  }, [productId]);

  return (
    <div className="ProductDetailsPage">
      <img src={product.image} alt="" />
      <div className="category">{product.category}</div>
      <div className="title">{product.title}</div>
      <div className="description_price">
        <div className="description">{product.description}</div>
        <div className="price">${product.price}</div>
      </div>
      <Link to="/" className="backBtn"><button >Back</button></Link>
    </div>
  );
}

export default ProductDetailsPage;
