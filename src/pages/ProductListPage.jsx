import axios from 'axios';
import { useState, useEffect } from 'react';

function ProductListPage() {
  // The state variable `products` is currently an empty array [],
  // but you should use it to store the response from the Fake Store API (the list of products).
  const [products, setProducts] = useState([]);

  // To fetch the list of products, set up an effect with the `useEffect` hook:
  useEffect(() => {
    axios
      .get('https://fakestoreapi.com/products')
      .then((response) => {
        setProducts(response.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  return (
    <div className="ProductListPage">
      {products.map((elm) => {
        return (
          <div className="card" key={elm.id}>
            <img src={elm.image} alt="product image" />
            <p>
              <b>{elm.title}</b>
            </p>
            <p>{elm.category}</p>
            <p>${elm.price}</p>
            <p>{elm.description}</p>
          </div>
        );
      })}
    </div>
  );
}

export default ProductListPage;
