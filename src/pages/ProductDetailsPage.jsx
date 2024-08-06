import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import ProductListPage from "./ProductListPage";

function ProductDetailsPage() {
  // The state variable `product` is currently an empty object {},
  // but you should use it to store the response from the Fake Store API (the product details).
  const { productId } = useParams();
  const [product, setProduct] = useState({});

  // The `productId` coming from the URL parameter is available in the URL path.
  // You can access it with the `useParams` hook from react-router-dom.
  // To fetch the product details, set up an effect with the `useEffect` hook:

  useEffect(() => {
    fetchData();
    console.log(product.title);
  }, [productId]);

  async function fetchData() {
    try {
      const response = await axios.get(
        `https://fakestoreapi.com/products/${productId}`
      );
      setProduct(response.data);
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <div className="ProductDetailsPage">
      {product ? (
        <div>
          <h1>{product.title}</h1>
          <p>{product.price}</p>
          <h2>{product.description}</h2>
          <img width="300px" src={product.image} />
        </div>
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
}

export default ProductDetailsPage;
