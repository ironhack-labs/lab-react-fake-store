import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";

function ProductDetailsPage() {
  // The state variable `product` is currently an empty object {},
  // but you should use it to store the response from the Fake Store API (the product details).

  const [product, setProduct] = useState({});

  const { productId } = useParams();

  const apiURL = `https://fakestoreapi.com/products/${productId}`;

  useEffect(() => {
    axios.get(apiURL).then((response) => {
      setProduct(response.data);
    });
  }, [productId]);

  // The `productId` coming from the URL parameter is available in the URL path.
  // You can access it with the `useParams` hook from react-router-dom.

  // To fetch the product details, set up an effect with the `useEffect` hook:

  return (
    <div className="ProductDetailsPage">
      <div key={product.id} className="card">
        <img src={product.image} alt="product image" className="img" />
        <h2>{product.title}</h2>
        <h4>{product.category}</h4>
        <p>$ {product.price}</p>
        <p>{product.description}</p>
      </div>
    </div>
  );
}

export default ProductDetailsPage;
