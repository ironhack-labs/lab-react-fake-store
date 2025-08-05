import { Link, useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";
const apiURL = "https://fakestoreapi.com/products";

function ProductDetailsPage() {
  // The state variable `product` is currently an empty object {},
  // but you should use it to store the response from the Fake Store API (the product details).
  const [product, setProduct] = useState({});

  const { productId } = useParams();

  // The `productId` coming from the URL parameter is available in the URL path.
  // You can access it with the `useParams` hook from react-router-dom.

  // To fetch the product details, set up an effect with the `useEffect` hook:
  useEffect(() => {
    axios.get(apiURL + "/" + productId).then((response) => {
      setProduct(response.data);
    });
  }, [productId]);

  return (
    <div className="ProductDetailsPage">
      <div key={product.id}>
        <img src={product.image} />
        <p>{product.title}</p>
        <p>{product.category}</p>
        <p>{product.price}</p>
        <p>{product.description}</p>
      </div>
      <Link to="/">Home</Link>
    </div>
  );
}

export default ProductDetailsPage;
