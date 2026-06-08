import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

function ProductDetailsPage() {
  // The state variable `product` is currently an empty object {},
  // but you should use it to store the response from the Fake Store API (the product details).
  const [product, setProduct] = useState({});
  const { productId } = useParams();

  // The `productId` coming from the URL parameter is available in the URL path.
  // You can access it with the `useParams` hook from react-router-dom.
  useEffect(() => {
    fetch(`http://fakestoreapi.com/products/${productId}`)
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        setProduct(data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, [productId]);

  // To fetch the product details, set up an effect with the `useEffect` hook:



  return (
    <div className="ProductDetailsPage">
    {/* Render product details here */}
      <h1>{product.title}</h1>
      <p>Price: {product.price}</p>
      <p>Category: {product.category}</p>
      <p>{product.description}</p>
      <img src={product.image} alt={product.title} width="200" />
    </div>
  );
}

export default ProductDetailsPage;
