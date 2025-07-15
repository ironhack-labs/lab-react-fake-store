import { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

const BASE_URL = "https://fakestoreapi.com";

function ProductListPage() {

  // The state variable `products` is currently an empty array [], 
  // but you should use it to store the response from the Fake Store API (the list of products).
  const [products, setProducts] = useState([]);

  // To fetch the list of products, set up an effect with the `useEffect` hook:
  useEffect(() => {
    axios
    .get(BASE_URL + "/products")
    .then((response) => {
      console.log(response.data)
      setProducts(response.data)
    })
    .catch((error) => {
      console.log(error)
    })
  },[])

  return (
    <div className="product-cards">
      {/* map it otherwise it wont show the array */}
      {products.map((product) => {
        return (
          <Link to={`/product/details/${product.id}`}>
            <div key={product.id} className="product-card">
              <img src={product.image} alt={product.name} className="product-card-image"/>
              <div className="product-card-title">{product.title}</div>
              <div className="product-card-category">{product.category}</div>
              <div className="product-card-price">${product.price}</div>
              <div className="product-card-description">{product.description.slice(0,50)}{product.description.length > 50 ? ' ...' : ''}</div>
            </div>
          </Link>
        )
      })}
    </div>
  );
}

export default ProductListPage;
