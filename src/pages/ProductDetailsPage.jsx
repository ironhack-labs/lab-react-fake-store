import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

function ProductDetailsPage({ products }) {
  // The state variable `product` is currently an empty object {},
  // but you should use it to store the response from the Fake Store API (the product details).
  const [product, setProduct] = useState({});
  const { productId } = useParams();

  useEffect(() => {
    fetch(`https://fakestoreapi.com/products/${productId}`)
      .then((resp) => resp.json())
      .then((resp) => setProduct(resp));
  }, [productId]);

  console.log(product);

  // The `productId` coming from the URL parameter is available in the URL path.
  // You can access it with the `useParams` hook from react-router-dom.

  // To fetch the product details, set up an effect with the `useEffect` hook:

  return <div className="ProductDetailsPage">{JSON.stringify(product)}</div>;
}

export default ProductDetailsPage;
