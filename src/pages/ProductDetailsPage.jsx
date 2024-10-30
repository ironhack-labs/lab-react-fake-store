import axios from "axios";
import { useEffect, useState } from "react";
import { NavLink, useParams } from "react-router-dom";

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
        console.log("error");
      });
  }, []);
  return (
    <div className="ProductDetailsPage ">
      <img className="img" src={product.image} />

      <p>{product.title}</p>
      <p>{product.category}</p>
      <p>{product.price}</p>
      <p>{product.description}</p>
      <button>
        <NavLink to="/">Back</NavLink>
      </button>
    </div>
  );
}

export default ProductDetailsPage;
