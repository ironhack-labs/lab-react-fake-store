import React from "react";
import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import axios from "axios";


function ProductDetailsPage() {
  // The state variable `product` is currently an empty object {},
  // but you should use it to store the response from the Fake Store API (the product details).
  const [product, setProduct] = useState({});


  // The `productId` coming from the URL parameter is available in the URL path.
  // You can access it with the `useParams` hook from react-router-dom.
  const { productId } = useParams();
  
  const navigate = useNavigate();

  // To fetch the product details, set up an effect with the `useEffect` hook:
  const apiURL = `https://fakestoreapi.com/products/${productId}`;

  const productDetails = async () => {
    try {
      const response = await axios.get(apiURL);
      console.log(response.data);
      setProduct(response.data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    productDetails();
  }, []);



  return (
    <div className="ProductDetailsPage">
    <img src={product.image} alt={product.title} className="product-image" />
    <h1 className="product-title">{product.title}</h1>
    <p className="product-category">{product.category}</p>
    <p className="product-price">${product.price}</p>
    <p className="product-description">{product.description}</p>

      <button onClick={() => navigate('/')} className="back-button">
        Back
      </button>

    </div>
  );
}

export default ProductDetailsPage;
