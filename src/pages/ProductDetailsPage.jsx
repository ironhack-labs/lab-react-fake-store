import axios from "axios";
import { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";


function ProductDetailsPage() {
  // The state variable `product` is currently an empty object {},
  // but you should use it to store the response from the Fake Store API (the product details).

  const {productId} = useParams();
  const [product, setProduct] = useState({});

  // The `productId` coming from the URL parameter is available in the URL path.
  // You can access it with the `useParams` hook from react-router-dom.

  const productApiId = `https://fakestoreapi.com/products/${productId}`
  // To fetch the product details, set up an effect with the `useEffect` hook:

  useEffect(() => {
    axios.get(productApiId)
    .then( response => {
      setProduct(response.data);
    })
    .catch(e => {
      console.log("error getting product details from the API...", e);
    })
  },[])

  return (
    <div className="ProductDetailsPage">
      {product === null && <h2>... loading</h2> }

      {product &&
        <div className="card">
          <img src={product.image} alt={product.title} />
          <h2>{product.title}</h2>
          <p>{product.category}</p>
          <p>{product.price}</p>
          <p>{product.description}</p>
        </div>
      }

      <Link to="/">Back to HomePage</Link>

    </div>
  );
}

export default ProductDetailsPage;
