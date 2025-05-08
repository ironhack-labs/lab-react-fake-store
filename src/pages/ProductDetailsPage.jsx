import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

function ProductDetailsPage() {
  // The state variable `product` is currently an empty object {},
  // but you should use it to store the response from the Fake Store API (the product details).
  const [product, setProduct] = useState({});
  const { productID } = useParams();

  useEffect(() => {
    fetch(`https://fakestoreapi.com/products/${productID}`)
      .then((response) => {
        console.log("Response status:", response.status, response);
        return response.json();
      })
      .then((data) => {
        console.log("Response data:", data);

        setProduct(data);
      })
      .catch((error) => console.log(error));
  }, [productID]);

  // The `productId` coming from the URL parameter is available in the URL path.
  // You can access it with the `useParams` hook from react-router-dom.

  // To fetch the product details, set up an effect with the `useEffect` hook:

  return (
    <div className="ProductDetailsPage card">
      <h2>
        <strong>{product.title}</strong>
      </h2>
      <p>{product.description}</p>
      <p>
        <strong>{product.price} Euro</strong>
      </p>
      <img src={product.image} alt={product.title} />
    </div>
  );
}

export default ProductDetailsPage;
