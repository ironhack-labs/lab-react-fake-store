import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";
import axios from "axios";
import "./DetailsPage.css"
import "./../App.css"


function ProductDetailsPage() {
  // The state variable `product` is currently an empty object {},
  // but you should use it to store the response from the Fake Store API (the product details).

  const [product, setProduct] = useState([]);

  // The `productId` coming from the URL parameter is available in the URL path.
  // You can access it with the `useParams` hook from react-router-dom.

  const { productId } = useParams()

  // To fetch the product details, set up an effect with the `useEffect` hook:

  const productLink = `https://fakestoreapi.com/products/${productId}`

  useEffect(() => loadProduct(), [productId])

  const loadProduct = () => {
    axios
      .get(productLink)
      .then(response => {
        setProduct(response.data)
      })
      .catch(err => {
        console.log(err)
      })
  }

  return (
    <div>
      {product !== null ? (
        <div className="ProductDetailsPage">
          <div className="imgContainer">
            <img src={product.image} alt="Product Image" />
          </div>
          <div className="infoContainer">
            <p className="category">{product.category}</p>
            <p className="title"><strong>{product.title}</strong></p>
            <div className="cointainer-details">
              <p className="description">{product.description}</p>
              <p className="price">{product.price}€</p>
            </div>
          </div>
          <Link to="/cart">
            <p className="cart"> 🛒 </p>
          </Link>
          <hr />
          <Link to="/">
            <button className="button">Back</button>
          </Link>
        </div>
      ) : (
        <p>Data Not Found!</p>
      )
      }
    </div >
  );
}

export default ProductDetailsPage;
