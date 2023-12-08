import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";

function ProductDetailsPage() {
  // The state variable `product` is currently an empty object {},
  // but you should use it to store the response from the Fake Store API (the product details).
  const [product, setProduct] = useState({});

  const apiURL = "https://fakestoreapi.com/products";

  let { productId } = useParams();

  // The `productId` coming from the URL parameter is available in the URL path.
  // You can access it with the `useParams` hook from react-router-dom.
  useEffect(() => {
    console.log("useEffect - Initial render (Mounting)");

    axios
      .get(apiURL + "/" + productId)
      .then((response) => {
        // console.log(response.data)
        setProduct(response.data);
      })

      .catch((err) => {
        console.log(err);
      });
  }, [productId]);

  // To fetch the product details, set up an effect with the `useEffect` hook:

  return (
    <div className="ProductDetailsPage">
      {/* Render product details here */}
      <img src={product.image} alt="Products" />
      <p>{product.category}</p>
      <h3>{product.title}</h3>
      <p>{product.description}</p>
      <p>{product.price}</p>
    </div>
  );
}

export default ProductDetailsPage;
