import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";

const apiURL = "https://fakestoreapi.com/products/";

function ProductDetailsPage() {
  // The state variable `product` is currently an empty object {},
  // but you should use it to store the response from the Fake Store API (the product details).
  const [product, setProduct] = useState({});

  // The `productId` coming from the URL parameter is available in the URL path.
  // You can access it with the `useParams` hook from react-router-dom.
  const { productId } = useParams();
  // To fetch the product details, set up an effect with the `useEffect` hook:

  useEffect(() => {
    axios.get(`${apiURL}${productId}`).then((response) => {
      setProduct(response.data);
    });
  }, [productId]);

  return (
    <div>
      <div className="ProductDetailsPage">
        {/* Render product details here */}
        <img src={product.image} />
        <button className="categoryButton">{product.category}</button>
        <h1>{product.title}</h1>
        <div className="descriptionPriceContainer">
          <p className="description">{product.description}</p>
          <p className="price">{product.price}</p>
        </div>
      </div>
      <button className="backButton">Back</button>
    </div>
  );
}

export default ProductDetailsPage;
