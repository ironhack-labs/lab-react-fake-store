import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";


function ProductDetailsPage() {
  // The state variable `product` is currently an empty object {},
  // but you should use it to store the response from the Fake Store API (the product details).
  const [product, setProduct] = useState({});

  // The `productId` coming from the URL parameter is available in the URL path.
  // You can access it with the `useParams` hook from react-router-dom.
  const { productId } = useParams()

  // To fetch the product details, set up an effect with the `useEffect` hook:
  useEffect(() => {

    axios.get(`https://fakestoreapi.com/products/${productId}`)
    .then(response => {
      setProduct(response.data)
    })

    .catch(error => {
      console.log
    })


  }, [productId]) // runs every time the productId changes


  return (
    <div className="ProductDetailsPage">
    {/* Render product details here */}
      <img src={product.image} style={{ width: '300px', height: 'auto'}} />
      <h2>{product.title}</h2>
      <p>{product.price}</p>
    </div>
  );
}

export default ProductDetailsPage;
