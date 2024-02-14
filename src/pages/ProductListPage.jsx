import { useState, useEffect } from "react";
import axios from 'axios'
import { Link } from 'react-router-dom'

function ProductListPage() {
  // The state variable `products` is currently an empty array [], 
  // but you should use it to store the response from the Fake Store API (the list of products).
  const [products, setProducts] = useState([]);

  // To fetch the list of products, set up an effect with the `useEffect` hook:
  useEffect(() => {
    axios.get("https://fakestoreapi.com/products")
    .then((response) => {
      setProducts(response.data);
    })
    .catch((error) => {
      console.log(error);
    })
  }, []);

  return (
    <div className="ProductListPage">
      {/* Render list of products here */}
      {products && products.map((product) => {
        return (
          <Link to={`/product/details/${product.id}`}><article key={product.id}>
              <img src={product.image}/>
              <h4>{product.title}</h4>
              <h4>{product.category}</h4>
              <h4>${product.price}</h4>
              <h4>{product.description}</h4>
          </article>
          </Link>
        )
      })}
    </div>
  );
}

export default ProductListPage;
