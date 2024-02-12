import { useState, useEffect } from "react";
import { Link, useParams } from 'react-router-dom';
import axios from "axios";


function ProductDetailsPage() {
  // The state variable `product` is currently an empty object {},
  // but you should use it to store the response from the Fake Store API (the product details).
  const [product, setProduct] = useState({});


  // The `productId` coming from the URL parameter is available in the URL path.
  // You can access it with the `useParams` hook from react-router-dom.
  const { productId } = useParams()

  // To fetch the product details, set up an effect with the `useEffect` hook:
  useEffect(() => {
    axios.get(`https://fakestoreapi.com/products/${productId}`)
      .then((response) => {
        setProduct(response.data)
      })
      .catch((e) => {
        console.log(e)
      })
  }, [])

  console.log(product)

  return (
    <div className="ProductDetailsPage">
      {/* Render product details here */}
      {product !== null &&
        <div className="productDetails card">
          <img src={product.image} alt={product.title} className="productDetailsImg" />
          <div className="category">{product.category}</div>
          <div className="title detailsPage">{product.title}</div>
          <div className="productInfo">
            <div className="description">{product.description}</div>
            <div className="price">${product.price}</div>
          </div>
          <hr />
          <Link to="/"><button class="back-btn">Back</button></Link>
        </div>}
    </div>
  );
}

export default ProductDetailsPage;
