import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";



function ProductDetailsPage() {
  // The state variable `product` is currently an empty object {},
  // but you should use it to store the response from the Fake Store API (the product details).
  const { productId } = useParams();
  
  const [product, setProduct] = useState(null);


  // The `productId` coming from the URL parameter is available in the URL path.
  // You can access it with the `useParams` hook from react-router-dom.


  // To fetch the product details, set up an effect with the `useEffect` hook:
useEffect(() => {

  axios
  .get(`https://fakestoreapi.com/products/${productId}`)
  .then((response) => {

    setProduct(response.data);
  })
  .catch((error) => {
    console.log(error);
  });

}, [productId]);

if (!product) {
  return <h2>Loading...</h2>;
}

return (
  <div className="ProductDetailsPage">
    {/* Render product details here */}

    <h1>{product.title}</h1>

    <img
    src={product.image}
    alt={product.title}
    width="200"
    />

    <p>{product.description}</p>

    <h3>${product.price}</h3>

  </div>
);
}


export default ProductDetailsPage;
