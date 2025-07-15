import axios from "axios";
import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";

const BASE_URL = "https://fakestoreapi.com/products/";

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
      .get(BASE_URL + productId)
      .then((response) => {
        console.log("SUCCESS getting item");
        setProduct(response.data);
      })
      .catch((error) => console.log("ERROR: ", error));
  }, []);

  return (
    <>
      <div className="ProductDetailsPage">
        {/* Render product details here */}
        <img src={product.image} alt={product.title} />
        <h3>{product.title}</h3>
        <p>{product.description}</p>
        <p>${product.price}</p>
      </div>
      <Link to="/" className="btn-primary">
        Back
      </Link>
    </>
  );
}

export default ProductDetailsPage;
