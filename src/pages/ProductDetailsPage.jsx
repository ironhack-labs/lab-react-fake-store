import { useState,useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import axios from "axios";
import "./ProductListPage.css";

function ProductDetailsPage() {
  // The state variable `product` is currently an empty object {},
  // but you should use it to store the response from the Fake Store API (the product details).
  const [product, setProduct] = useState({});
  const { productId } = useParams();
  useEffect(() => {
    axios
      .get(`https://fakestoreapi.com/products/${productId}`)
      .then((response) => {
        setProduct(response.data);
        console.log(response.data)
      })
      .catch((error) => {
        console.log("Error", error);
      });
  }, [productId]);

  // The `productId` coming from the URL parameter is available in the URL path.
  // You can access it with the `useParams` hook from react-router-dom.

  // To fetch the product details, set up an effect with the `useEffect` hook:

  return (
    <div className="ProductDetailsPage">
        <img src={product.image} />
        <p className="product-category">{product.category}</p>
          <p>
            <strong>{product.title}</strong>
          </p>
        <div className="product-pricedescription">
          <p>{product.description}</p>
          <p>$ {product.price}</p>
      </div>
    </div>
  );
}

export default ProductDetailsPage;