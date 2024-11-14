import { useState } from "react";
import { useParams } from "react-router-dom";
import { useEffect } from "react";

function ProductDetailsPage() {
  // The state variable `product` is currently an empty object {},
  // but you should use it to store the response from the Fake Store API (the product details).
  const [product, setProduct] = useState({});

  // The `productId` coming from the URL parameter is available in the URL path.
  // You can access it with the `useParams` hook from react-router-dom.
  const myParams = useParams();
  console.log(myParams);

  // To fetch the product details, set up an effect with the `useEffect` hook:

  useEffect(() => {
    fetch(`https://fakestoreapi.com/products/${myParams.productId}`)
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        console.log(data);
        setProduct(data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);
  return (
    <div className="ProductDetailsPage">
      <h6>{product.title} </h6>
      <h1>{product.category}</h1>
      <h2>{product.price}UAH</h2>
      <h3>{product.description}</h3>
      <img src={product.image} className="Images" />
    </div>
  );
}

export default ProductDetailsPage;
