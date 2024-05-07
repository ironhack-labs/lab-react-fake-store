/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";


function ProductDetailsPage() {
  // The state variable `product` is currently an empty object {},
  // but you should use it to store the response from the Fake Store API (the product details).
  const [product, setProduct] = useState(null);

  // The `productId` coming from the URL parameter is available in the URL path.
  const { productId } = useParams();

  // You can access it with the `useParams` hook from react-router-dom.

  // To fetch the product details, set up an effect with the `useEffect` hook:

  useEffect(() => {
    axios
      .get(`https://fakestoreapi.com/product/${productId}`)
      .then((response) => {
        setProduct(response.data);
      })
      .catch((e) => {
        console.log("error getting product from the API...", e);
      });
  }, []);

  return (
    <div className="ProductListPage">
      {/* Render list of product here */}
      <>
        {product === null ? (
          <h2>loading...</h2>
        ) : (
          <h2>Number of product in the API: {product.length}</h2>
        )}

        {product && (
          <div key={productId} className="card">
            <img>{product.image}</img>
            <p>Name: {product.title}</p>
            <p>Price: {product.price}</p>
            <p>Category: {product.category}</p>
          </div>
        )}
      </>
    </div>
  );
}

export default ProductDetailsPage;
