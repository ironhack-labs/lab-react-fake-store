import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";

function ProductDetailsPage() {
  // The state variable `product` is currently an empty object {},
  // but you should use it to store the response from the Fake Store API (the product details).
  const [product, setProduct] = useState({});

  // The `productId` coming from the URL parameter is available in the URL path.
  // You can access it with the `useParams` hook from react-router-dom.
  const { productId } = useParams();

  // To fetch the product details, set up an effect with the `useEffect` hook:
  // To fetch the list of products, set up an effect with the `useEffect` hook:
  const [fetching, setFetching] = useState(true);

  useEffect(() => {
    console.log("useEffect - Initial render (Mounting)");
    console.log(productId);
    const prodURL = `https://fakestoreapi.com/products/${productId}`;
    axios
      .get(prodURL)
      .then((response) => {
        // Handle success
        console.log(response);
        setProduct(response.data);
        setFetching(false);
      })
      .catch((error) => {
        // Handle error
        console.log(error);
      });
  }, [productId]);

  return (
    <div className="ProductDetailsPage">
      <div key={product.id} className="card">
        <img src={product.image} alt="product" />
        <div className="title">
          <h3>{product.title}</h3>
        </div>
        <div className="category">
          <h3>{product.category}</h3>
        </div>
        <div className="price">
          <h3>{product.price}</h3>
        </div>
        <div className="description">
          <p>{product.description}</p>
        </div>
      </div>
    </div>
  );
}

export default ProductDetailsPage;
