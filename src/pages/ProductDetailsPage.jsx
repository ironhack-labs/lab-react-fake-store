import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { ProductDetailsCard } from "../components/ProductDetailsCard";

function ProductDetailsPage() {
  const { productId } = useParams();
  console.log(productId);

  // The state variable `product` is currently an empty object {},
  // but you should use it to store the response from the Fake Store API (the product details).
  const [product, setProduct] = useState({});

  // The `productId` coming from the URL parameter is available in the URL path.
  // You can access it with the `useParams` hook from react-router-dom.

  // To fetch the product details, set up an effect with the `useEffect` hook:
  useEffect(() => {
    fetch(`https://fakestoreapi.com/products/${productId}`)
      .then((response) => response.json())
      .then((jsonResponse) => {
        console.log(jsonResponse);
        setProduct(jsonResponse);
      })
      .catch(() => console.error("Sorry, the fetch for the products failed!"));
  }, []);

  return (
    <div className="ProductDetailsPage">
      {/* Render product details here */
      product === null ? (
        <h2> Loading...</h2>
      ) : (
          <ProductDetailsCard product={product} />)
      }
    </div>
  );
}

export default ProductDetailsPage;
