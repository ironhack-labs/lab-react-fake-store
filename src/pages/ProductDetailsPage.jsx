import { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import axios from "axios";


function ProductDetailsPage() {
  // The state variable `product` is currently an empty object {},
  // but you should use it to store the response from the Fake Store API (the product details).
  const [product, setProduct] = useState({});


  // The `productId` coming from the URL parameter is available in the URL path.
  // You can access it with the `useParams` hook from react-router-dom.
  const productId = useParams().productId;

  // To fetch the product details, set up an effect with the `useEffect` hook:
  useEffect(() => {
    axios.get(`https://fakestoreapi.com/products/${productId}`)
      .then((result) => setProduct(result.data))
      .catch((error) => console.log(error))
  }, [productId]);

  return (
    <div className="ProductDetailsPage">
      {product.title === undefined ? <p>Nothing to show...</p> :
      <div className="card">
        <img src={product.image} />
        <h1>{product.title}</h1>
        <p>{product.description}</p><p className="price"> ${product.price}</p>
        <hr />
        <Link to="/">
          <div className="ProductDetailsPage-button">
            <button>Back</button>
          </div>
        </Link>
      </div>
      }
    </div>
  );
}

export default ProductDetailsPage;
