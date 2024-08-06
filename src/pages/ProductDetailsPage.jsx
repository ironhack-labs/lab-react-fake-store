import { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
const apiURL = "https://fakestoreapi.com/products";

function ProductDetailsPage() {
  // The state variable `product` is currently an empty object {},
  // but you should use it to store the response from the Fake Store API (the product details).
  const [product, setProduct] = useState({});
  const { productId } = useParams();
  const nav = useNavigate();

  // The `productId` coming from the URL parameter is available in the URL path.
  // You can access it with the `useParams` hook from react-router-dom.

  // To fetch the product details, set up an effect with the `useEffect` hook:

  useEffect(() => {
    fetch(`${apiURL}/${productId}`)
      .then((response) => response.json())
      .then((data) => setProduct(data))
      .catch((err) => console.log(err.message));
  }, []);

  return (
    <div className="ProductDetailsPage">
      <img src={product.image} alt={product.title} />
      <h3>{product.title}</h3>
      <p>{product.description}</p> <p>${product.price}</p>
      <button onClick={() => nav("/")}>Back</button>
    </div>
  );
}

export default ProductDetailsPage;
