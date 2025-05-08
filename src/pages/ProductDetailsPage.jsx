import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";

function ProductDetailsPage() {
  // The state variable `product` is currently an empty object {},
  // but you should use it to store the response from the Fake Store API (the product details).
  const [product, setProduct] = useState({});


  // The `productId` coming from the URL parameter is available in the URL path.
  // You can access it with the `useParams` hook from react-router-dom.
  const { productId } = useParams();

  // To fetch the product details, set up an effect with the `useEffect` hook:


  useEffect(() => {
    axios
      .get("https://fakestoreapi.com/products")
      .then(({data}) => setProduct(data[productId-1]))
      .catch(e => console.log(e))
  }, [productId]);

  return (
    <div className="ProductDetailsPage">
    <img src={product.image} alt="Product Image" />
      <p><strong>{product.title}</strong></p>
      <p>{product.category}</p>
      <p>{product.price}</p>
      <p>{product.description}</p>
    </div>
  );
}

export default ProductDetailsPage;
