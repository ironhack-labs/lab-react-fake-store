import { useState } from "react";

import { useParams } from "react-router-dom";
import { useEffect } from "react";
import axios from "axios";


function ProductDetailsPage() {
  // The state variable `product` is currently an empty object {},
  // but you should use it to store the response from the Fake Store API (the product details).
  const [product, setProduct] = useState({});

  // The `productId` coming from the URL parameter is available in the URL path.
  // You can access it with the `useParams` hook from react-router-dom.
  const {productId} = useParams()

  // To fetch the product details, set up an effect with the `useEffect` hook:
  useEffect(() => {
    axios.get(`https://fakestoreapi.com/products/${productId}`).then((response) => {
      setProduct(response.data);
    })
    .catch((error) => {
      console.log(error);
    })
  }, [productId]);


  return (
    <div className="ProductDetailsPage" key={product.id}>
      <h3>{product.title}</h3>
      <img src={product.image}/>
      <p>{product.price}</p>
      <p>{product.category}</p>
      <p>{product.description}</p>
    </div>
  );
}

export default ProductDetailsPage;
