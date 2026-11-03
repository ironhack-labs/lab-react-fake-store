import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

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
        console.log(response.data);
        setProduct(response.data);
      })
      .catch((error) => {
        console.error(error);
      });
  }, [productId]);

  if (!product) {
    return <p>Getting products details...</p>;
  }

  return (
    <div className="card flex-center">
      <img src={product.image} />
      <p>{product.title}</p>
      <p>{product.category}</p>
      <p>${product.price}</p>
    </div>
  );
}

export default ProductDetailsPage;
