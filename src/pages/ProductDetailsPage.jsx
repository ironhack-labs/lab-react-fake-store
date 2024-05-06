import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import { Link } from "react-router-dom";

import './ProductDetailsPage.css'

function ProductDetailsPage() {
  // The state variable `product` is currently an empty object {},
  // but you should use it to store the response from the Fake Store API (the product details).
  const [product, setProduct] = useState({});

  const productId = useParams()
  const productURL = `https://fakestoreapi.com/products/${Object.values(productId)}`

  useEffect(() => {
    getProduct(productURL)
  }, [])

  const getProduct = () => {
    axios
      .get(productURL)
      .then(response => setProduct(response.data))
      .catch(err => `Error (${err}) al cargar el producto`)
  }

  // The `productId` coming from the URL parameter is available in the URL path.
  // You can access it with the `useParams` hook from react-router-dom.

  // To fetch the product details, set up an effect with the `useEffect` hook:

  return (
    <div className="ProductDetailsPage">
      {/* Render product details here */}
      <img className="product-image" src={product.image} alt={product.title} />
      <br />
      <p className="category-label">{product.category}</p>
      <h2 className="product-name">{product.title}</h2>
      <div className="description-card">
        <p className="long-description">{product.description}</p>
        <p className="description-price">${product.price}</p>
      </div>
      <Link to={'/'}><button>Back</button></Link>
    </div>
  );
}

export default ProductDetailsPage;
