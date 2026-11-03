import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

function ProductDetailsPage() {
  // The state variable `product` is currently an empty object {},
  // but you should use it to store the response from the Fake Store API (the product details).
  const [product, setProduct] = useState(null);

  const param = useParams();
  useEffect(() => {
    getData();
  }, [param.productId]);

  const getData = async () => {
    try {
      const response = await fetch(
        `https://fakestoreapi.com/products/${param.productId}`,
      );
      const data = await response.json();
      setProduct(data);
      console.log(data);
    } catch (error) {
      console.log(error);
    }
  };

  if (!product) {
    return <p>Loading product details...</p>;
  }

  // The `productId` coming from the URL parameter is available in the URL path.
  // You can access it with the `useParams` hook from react-router-dom.

  // To fetch the product details, set up an effect with the `useEffect` hook:

  return (
  <div className="ProductDetailsPage">
    <h1>{product.title}</h1>

    <img
      src={product.image}
      alt={product.title}
      width="200"
    />

    <h2>{product.price} €</h2>

    <p>{product.description}</p>

    <p>Category: {product.category}</p>
  </div>
);
}
export default ProductDetailsPage
