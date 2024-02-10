import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

function ProductDetailsPage() {
  // The state variable `product` is currently an empty object {},
  // but you should use it to store the response from the Fake Store API (the product details).
  const [product, setProduct] = useState({});

  const { productId } = useParams();

  useEffect(() => {
    fetch(`https://fakestoreapi.com/products/${productId}`)
      .then((res) => res.json())
      .then((json) => setProduct(json));
  }, [productId]);

  // To fetch the product details, set up an effect with the `useEffect` hook:

  return (
    <div className="ProductDetailsPage">
      <img src={product.image} />
      <span>{product.category}</span>
      <h2>{product.title}</h2>

      <div style={{ display: "flex", textAlign: "start" }}>
        <p>{product.description}</p>

        <p>{product.price}</p>
      </div>
    </div>
  );
}

export default ProductDetailsPage;
