import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";


function ProductDetailsPage() {
  // The state variable `product` is currently an empty object {},
  // but you should use it to store the response from the Fake Store API (the product details).
  const [product, setProduct] = useState({});


  // The `productId` coming from the URL parameter is available in the URL path.
  // You can access it with the `useParams` hook from react-router-dom.
  const { productId } = useParams();

  // To fetch the product details, set up an effect with the `useEffect` hook:
  useEffect(() => {
    fetch(`https://fakestoreapi.com/products/${productId}`)
    .then(res=>res.json())
    .then(json=>setProduct(json))
  }, [] );


  return (
    <div className="ProductDetailsPage">
      <img src={product.image} alt={product.title} className="card" />
      <b>{product.title}</b>
      <p>{product.category}</p>
      <p>{product.price}</p>
      <p>{product.description}</p>
      <button>Buy</button>
    </div>
  );
}

export default ProductDetailsPage;
