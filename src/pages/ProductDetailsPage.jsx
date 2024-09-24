import { useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import { Link } from "react-router-dom";
import { useEffect } from "react";

function ProductDetailsPage() {
  // The state variable `product` is currently an empty object {},
  // but you should use it to store the response from the Fake Store API (the product details).
  const [product, setProduct] = useState({});
  const { productId } = useParams();

  // The `productId` coming from the URL parameter is available in the URL path.
  // You can access it with the `useParams` hook from react-router-dom.

  // To fetch the product details, set up an effect with the `useEffect` hook:
  useEffect(() => {
    axios
      .get(`https://fakestoreapi.com/products/${productId}`)
      .then((response) => {
        setProduct(response.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, [productId]);

  return (
    <div className="product-detail">
      <img src={product.image} alt={product.title} />
      <p className="category-label">Category: {product.category}</p>
      <h1>{product.title}</h1>
      <div id="content">
      <p>{product.description}</p>
      <p id="price" >${product.price}</p>
      </div>
     

      <Link to="/">
        <button>Back</button>
      </Link>
    </div>
  );
}

export default ProductDetailsPage;
