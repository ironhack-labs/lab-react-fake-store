import { useState,useEffect } from "react";

import axios from "axios";

import { useParams } from "react-router-dom";

function ProductDetailsPage() {
  // The state variable `product` is currently an empty object {},
  // but you should use it to store the response from the Fake Store API (the product details).
  const [product, setProduct] = useState({});
  const {productId} = useParams();
  useEffect(() => {
    
    axios
    .get(`https://fakestoreapi.com/products/${productId}`)
    .then((response) => {
        setProduct(response.data)
    })
        .catch((error) => {
            console.log(error);
        })
}, [productId])

  // The `productId` coming from the URL parameter is available in the URL path.
  // You can access it with the `useParams` hook from react-router-dom.


  // To fetch the product details, set up an effect with the `useEffect` hook:



  return (
    <div className="ProductDetailsPage">
      {product && (
        <article key={product.id}>
          <img class = "ProductImage" src={product.image} alt={product.title} />
          <h3 class = "ProductTitle">{product.title}</h3>
          <h3 class = "ProductTitle">{product.price}</h3>
          <h3 class = "ProductTitle">{product.category}</h3>
          <h3 class= "ProductTitle">{product.description}</h3>
        </article>
      )}
    </div>
  );
}

export default ProductDetailsPage;
