import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

function ProductDetailsPage() {
  // The state variable `product` is currently an empty object {},
  // but you should use it to store the response from the Fake Store API (the product details).
  const [product, setProduct] = useState({});

  const params = useParams();

  useEffect(() => {
    fetch(`https://fakestoreapi.com/products/${params.productId}`)
      .then((response) => response.json())
      .then((data) => setProduct(data))
      .catch((err) => console.log(err));
  }, []);

  // The `productId` coming from the URL parameter is available in the URL path.
  // You can access it with the `useParams` hook from react-router-dom.

  // To fetch the product details, set up an effect with the `useEffect` hook:

  return (
    <div className="ProductDetailsPage">
      <div className="card">
        <img src={product.image} className="product-image"></img>
        <h2 className="product-title"> {product.title} </h2>
        <h2 className="product-price"> ${product.price} </h2>
        <h2 className="product-description"> {product.description} </h2>
        <h2 className="product-category"> {product.category} </h2>
      </div>
    </div>
  );
}

export default ProductDetailsPage;
