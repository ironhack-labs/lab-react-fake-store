import { useState, useEffect } from "react";
import axios from "axios";
import { Link, useParams } from "react-router-dom";

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
      .get(`https://fakestoreapi.com/products/${productId}`)
      .then((response) => {
        setProduct(response.data);
      })
      .catch((e) => {
        console.log("Error");
      });
  }, [productId]);

  return (
    <div className="ProductDetailsPage">
      {/* Render product details here */}
      {product === null ? (
        <h2>Loading...</h2>
      ) : (
        <div>
          <img src={product.image} alt={product.title}  />
          <div>
            <p>{product.title} </p>
            <p>{product.price} </p>
            <p>{product.category} </p>
            <p>{product.description} </p>
          </div>
        </div>
      )}
       <Link to="/">Back</Link>
    </div>
  );
}

export default ProductDetailsPage;
