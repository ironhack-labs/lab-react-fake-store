import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";

function ProductDetailsPage() {
  // The state variable `product` is currently an empty object {},
  // but you should use it to store the response from the Fake Store API (the product details).
  const [product, setProduct] = useState(null);

  // The `productId` coming from the URL parameter is available in the URL path.
  // You can access it with the `useParams` hook from react-router-dom.
  const { productId } = useParams();

  // To fetch the product details, set up an effect with the `useEffect` hook:

  useEffect(() => {
    axios
      .get(`https://fakestoreapi.com/product/details/${productId}`)
      .then((response) => {
        setProduct(response.data);
      })
      .catch((error) => console.log(error));
  }, [productId]);
  if (!product) {
    return <p>Loading...</p>;
  }

  return (
    <div className="ProductDetailsPage">
      <img src={product.image} style={{ height: "300px" }} />
      <h3>{product.title}</h3>
      <h3>{product.category}</h3>
      <h3>{product.price}</h3>
      <h3>{product.description}</h3>
    </div>
  );
}

export default ProductDetailsPage;
