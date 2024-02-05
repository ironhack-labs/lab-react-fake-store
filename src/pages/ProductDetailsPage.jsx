import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";

function ProductDetailsPage() {
  const { productId } = useParams();
  const apiURL = `https://fakestoreapi.com/products/${productId}`;
  // The state variable `product` is currently an empty object {},
  // but you should use it to store the response from the Fake Store API (the product details).
  const [product, setProduct] = useState({});
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);

  // The `productId` coming from the URL parameter is available in the URL path.
  // You can access it with the `useParams` hook from react-router-dom.

  // To fetch the product details, set up an effect with the `useEffect` hook:
  useEffect(() => {
    axios
      .get(apiURL)
      .then(
        (response) => {
          setProduct(response.data);
          // fetch(`https://fakestoreapi.com/products/${productId}`)
          //   .then((res) => res.json())
          //   .then((json) => setProduct(json));
        },
        [productId]
      )
      .catch((err) => setError(err))
      .finally(() => setLoading(false));
  });

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Oopsy daisy, something weird happened</div>;

  return (
    <div className="ProductDetailsPage">
      <img style={{ width: "20%" }} src={product.image} />
      <h2>{product.title}</h2>
      <button>{product.category}</button>
      <p>{product.description}</p>
      <p>{product.price}€</p>
      <button>Back</button>
    </div>
  );
}

export default ProductDetailsPage;
