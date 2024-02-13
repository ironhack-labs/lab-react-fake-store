import { useState } from "react";
import { useEffect } from "react";
import axios from "axios";

import { Link } from "react-router-dom";

function ProductListPage() {
  // The state variable `products` is currently an empty array [], 
  // but you should use it to store the response from the Fake Store API (the list of products).
  const [products, setProducts] = useState([]);

  // To fetch the list of products, set up an effect with the `useEffect` hook:
  const fakeStoreUrl = 'https://fakestoreapi.com/products';
  useEffect(() => {
      axios.get(fakeStoreUrl)
          .then((res) => {
            setProducts(res.data);
          })
          .catch((err) => {
              console.log(err, "Eror")
          });

  }, []);


  return (
    <div className="ProductListPage">
      <h1>The Fake Store</h1>
      {products.length === 0 ? 
    <h2>Loading...</h2>
    :
    <div>
      
      <h2>The list of products in our store:</h2>
      <ul>
        {products.map((product) => (
          <li key={product.id}>
            <Link to={`/product/details/${product.id}`}>
              {product.title} - ${product.price}
            </Link>
          </li>
        ))}
      </ul>
    </div>
}
    </div>
  );
}

export default ProductListPage;
