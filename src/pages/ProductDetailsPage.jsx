import React, { useEffect, useState } from "react";
import {useParams} from 'react-router-dom';

// The state variable `product` is currently an empty object {},
  // but you should use it to store the response from the Fake Store API (the product details).
// The `productId` coming from the URL parameter is available in the URL path.
  // You can access it with the `useParams` hook from react-router-dom.
  // To fetch the product details, set up an effect with the `useEffect` hook:


function ProductDetailsPage() {
  const {id} = useParams();

const [product, setProduct] = useState({});

useEffect(() => {
  const fetchProductsDetails = async() => {
    try {
      const response = await fetch (`https://fakestoreapi.com/products/${id}`)
      if (response.ok) {
      const productData = await response.json()
      setProduct(productData);
      
      
      }
    } catch (error) {
      console.log(error)
      
    }
  }

  fetchProductsDetails()
}, [id]);


  return (
    <div className="ProductDetailsPage">
     {product ? (
        <>
          <h1>{product.title}</h1>
          <img src={product.image} alt={product.title} width="200" />
          <p>{product.description}</p>
          <p><strong>${product.price}</strong></p>
          <p><strong>Category:</strong> {product.category}</p>
        </>
      ) : (
        <div>Producto no encontrado</div>
      )}
    </div>
  );

}

export default ProductDetailsPage;
