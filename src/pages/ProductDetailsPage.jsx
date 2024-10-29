import axios from "axios";
import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";

function ProductDetailsPage() {
  // The state variable `product` is currently an empty object {},
  // but you should use it to store the response from the Fake Store API (the product details).
  const [product, setProduct] = useState({});

  const { productId } = useParams();

  // The `productId` coming from the URL parameter is available in the URL path.
  // You can access it with the `useParams` hook from react-router-dom.

  // To fetch the product details, set up an effect with the `useEffect` hook:

  useEffect(() => {
    axios
      .get(`https://fakestoreapi.com/products/${productId}`)
      .then((response) => {
        setProduct(response.data);
      })
      .catch((e) => {
        console.log("Error getting product details from the API");
      });
  }, []);

  return (
    <div className="ProductDetailsPage">
      {product ? (
        <div>
          <h3>{product.title}</h3>
          <p>Price: ${product.price}</p>
          <img src={product.image} alt={product.title} width="200" />
          <p>{product.description}</p>
        </div>
      ) : (
        <h2>Loading...</h2>
      )}
    </div>
  );
}

export default ProductDetailsPage;
