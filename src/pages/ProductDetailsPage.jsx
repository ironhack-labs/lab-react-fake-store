import { Link, useParams } from "react-router-dom";
import axios from "axios";
import { useState, useEffect } from "react";

function ProductDetailsPage() {
  // The state variable `product` is currently an empty object {},
  // but you should use it to store the response from the Fake Store API (the product details).
  const [product, setProduct] = useState({});
  const { productId } = useParams();

  // The `productId` coming from the URL parameter is available in the URL path.
  // You can access it with the `useParams` hook from react-router-dom.


  // To fetch the product details, set up an effect with the `useEffect` hook:
  useEffect(() => {
    axios.get(`https://fakestoreapi.com/products/${productId}`)
      .then(response => {
        setProduct(response.data);
      })
      .catch((e) => {
        console.log(e);
      });
  }, [productId]);


  return (
    <>
      {product.length === 0 && <h2>Loading...</h2>}

      {product &&
          <div className="card">
            <h3>{product.title}</h3>
            <img src={product.image}/>
            <p>About the product: {product.description}</p>
            <p>Price: ${product.price}</p>
          </div>
      }
      <Link to="/">Back to Homepage</Link>
</>
      )
      }

export default ProductDetailsPage;
