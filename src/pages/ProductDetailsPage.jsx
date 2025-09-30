import axios from "axios";
import { useState } from "react";
import { useParams } from "react-router-dom";
import { useEffect } from "react";

function ProductDetailsPage() {
  // The state variable `product` is currently an empty object {},
  // but you should use it to store the response from the Fake Store API (the product details).
  const [product, setProduct] = useState({});

  // The `productId` coming from the URL parameter is available in the URL path.
  // You can access it with the `useParams` hook from react-router-dom.

  // To fetch the product details, set up an effect with the `useEffect` hook:

  const { productId } = useParams();

  console.log("Product Id: ", productId);

  useEffect(() => {
    async function getProductDetails() {
      try {
        const { data } = await axios(
          `https://fakestoreapi.com/products/${productId}`
        );
        setProduct(data);
      } catch (error) {
        console.log(error);
      }
    }

    getProductDetails();
  }, [productId]);

  console.log("Product state:", product);

  return (
    <div className="product-details-page">
      <img src={product.image} alt={product.title} />
      <h2>{product.title}</h2>
      <h3>{product.price}</h3>
      <p>{product.description}</p>
    </div>
  );
}

export default ProductDetailsPage;
