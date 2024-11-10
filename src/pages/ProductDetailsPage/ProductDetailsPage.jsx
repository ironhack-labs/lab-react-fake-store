import axios from "axios";
import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";

import "./ProductDetailsPage.css"

const API_URL = "https://fakestoreapi.com"

function ProductDetailsPage() {
  // The state variable `product` is currently an empty object {},
  // but you should use it to store the response from the Fake Store API (the product details).
  const [product, setProduct] = useState({});

  // The `productId` coming from the URL parameter is available in the URL path.
  // You can access it with the `useParams` hook from react-router-dom.
  const { productId } = useParams()

  // To fetch the product details, set up an effect with the `useEffect` hook:
  useEffect(() => {
    fetchProductsDetails()
  }, [])

  const fetchProductsDetails = () => {
    axios

      .get(`${API_URL}/products/${productId}`)
      .then(response => setProduct(response.data))
      .catch(err => console.log(err))
  }


  return (

    <div className="ProductDetailsPage">

      <img src={product.image} alt={product.title} />
      <h2>{product.category}</h2>
      <h3 className="title">{product.title}</h3>

      <div className="DetailsContainer">
        <p>{product.description}</p>
        <h3>${product.price}</h3>
      </div>

      <div className="ButtonContainer">
        <Link to={'/'}><button className="BackButton">Back</button></Link>
      </div>

    </div>



  );
}

export default ProductDetailsPage;
