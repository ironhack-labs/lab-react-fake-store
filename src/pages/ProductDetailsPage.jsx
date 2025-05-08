import axios from "axios";
import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import './ProductDetailsPage.css'

function ProductDetailsPage() {
  // The state variable `product` is currently an empty object {},
  // but you should use it to store the response from the Fake Store API (the product details).
  const [product, setProduct] = useState({});


  // The `productId` coming from the URL parameter is available in the URL path.
  // You can access it with the `useParams` hook from react-router-dom.

  let { productId } = useParams()
  // To fetch the product details, set up an effect with the `useEffect` hook:

  useEffect(() => {
    axios
      .get(`https://fakestoreapi.com/products/${productId}`)
      .then(Response => {
        setProduct(Response.data)
      })
      .catch(err => console.log(err))
  }, [])


  return (
    <div className="ProductDetailsPage">
      {
        <div className="productDetailsCard">
          <img src={product.image} className="imageProductDetails"></img>
          <div className="categoryDetailsCard">{product.category}</div>
          <div className="titleDetailsCard">{product.title}</div>
          <div className="descriptionAndPriceDetailsCard">
            <div className="descriptionDetailsCard">{product.description}</div>
            <div className="priceCard">${product.price}</div>
          </div>
          <br />
          <div className="buttonZone">
            <Link to={'/'}>
              <button className="buttonReturnDetailsCard">Back</button>
            </Link>
          </div>
        </div>
      }
    </div>
  );
}

export default ProductDetailsPage;
