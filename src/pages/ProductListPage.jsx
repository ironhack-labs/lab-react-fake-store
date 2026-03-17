import { useState, useEffect } from 'react';
import axios from 'axios';
import { Link } from "react-router-dom";

function ProductListPage() {
  // The state variable `products` is currently an empty array [], 
  // but you should use it to store the response from the Fake Store API (the list of products).
  const [products, setProducts] = useState([]);

  useEffect(() => {
    axios
      .get("https://fakestoreapi.com/products")
      .then((response) => {
        setProducts(response.data);
      })
      .catch((error) => {
        console.log("Error getting product from the API | Error: ", error)
      }
      )
  }, [])

  // To fetch the list of products, set up an effect with the `useEffect` hook:


  return (
    <div className="ProductListPage">
      {products.map((product) => {
        return (
          <div key={product.id}>

            <Link to={`/product/details/${product.id}`}>
              <h2>{product.title}</h2>
              <img src={product.image} alt={product.title} width="100" />
              <p>{product.price} €</p>
            </Link>

          </div>
        );
      })}
    </div>
  );
}

export default ProductListPage;
