import { useState } from "react";
import { useEffect } from "react";
import React from "react";
import axios from "axios";
import { Link } from "react-router-dom";

function ProductListPage({ productDetails }) {
  // The state variable `products` is currently an empty array [], 
  // but you should use it to store the response from the Fake Store API (the list of products).

  // To fetch the list of products, set up an effect with the `useEffect` hook:

  const baseURL = 'https://fakestoreapi.com/products';
  const [products, setProducts] = useState(null);
  // const [shortDescription, setShortDescription] = useState('');

  useEffect(() => {
    axios.get(`${baseURL}`)
      .then(response => {
        setProducts(response.data)
        console.log(response.data)
      })
      .catch(error => {
        console.log("No products displayed")
        console.log(error)
        return (`No products currently available`)
      })
  }, [])

  /*useEffect(() => {
    setShortDescription(productDetails.description.substring(0,50) + '...');
   }, [productDetails.description]);
*/

  return (
    <div className="ProductListPage">
      {products === null
        ? <p>Loading</p>
        : <p>{products.data}</p>
      }
      {products !== null &&
        products.map((productDetails, index) => {
          return (
            <Link to={`./product/${productDetails.id}`} className="productDetailsLink">
              <div key={index} className="productBox">
                <img src={productDetails.image} alt={productDetails.title} />
                <h2>{productDetails.title}</h2>
                <p>{productDetails.category}</p>
                <p>$ {productDetails.price}</p>
                <p>{productDetails.description}</p>

              </div>
            </Link>
          )
        })}
    </div>
  );
}
export default ProductListPage;
