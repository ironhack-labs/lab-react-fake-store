import { useState, useEffect } from "react";
import axios from 'axios'
import { Link } from "react-router-dom";


function ProductListPage() {
  // The state variable `products` is currently an empty array [], 
  // but you should use it to store the response from the Fake Store API (the list of products).
  const [products, setProducts] = useState([]);

  // To fetch the list of products, set up an effect with the `useEffect` hook:
  useEffect(() => {
    axios.get("https://fakestoreapi.com/products")
      .then((response) => {
        setProducts(response.data)
      })
      .catch(e => console.log("Error found"))
  }, [])

  return (
    <div className="ProductListPage">
      {products.map((productObj) => {
        return (
          <Link key={productObj.id} to={`/product/details/${productObj.id}`}>
          <img src={productObj.image} alt="product detail image" />
          <p>{productObj.title}</p>
          <p>{productObj.category}</p>
          <p>{productObj.price}</p>
          <p>{productObj.description}</p>
          </Link>
        )
      })}
    </div>
  );
}

export default ProductListPage;
