/*import { useState } from "react";*/

import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

function ProductListPage() {
  // The state variable `products` is currently an empty array [], 
  // but you should use it to store the response from the Fake Store API (the list of products).
const [products, setProducts] = useState([]);

  // To fetch the list of products, set up an effect with the `useEffect` hook:

  useEffect(() => {
    fetch("https://fakestoreapi.com/products")
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        console.log(data)
        setProducts(data)
      })
      .catch((error) => console.log(error));
  }, []);

    return (
    <div className="ProductListPage">
      <h1>Products</h1>

      {products.map((product) => (
        <div key={product.id} className="product-card">
          <Link to={`/product/details/${product.id}`}>
            <h3>{product.title}</h3>
            <img src={product.image} alt={product.title} />
            <p>${product.price}</p>
          </Link>
        </div>
      ))}
    </div>
  );
}

export default ProductListPage;
