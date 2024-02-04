import { useState, useEffect } from "react";
import axios from "axios";


function ProductListPage() {
  // The state variable `products` is currently an empty array [], 
  // but you should use it to store the response from the Fake Store API (the list of products).
  const [products, setProducts] = useState([]);

  // To fetch the list of products, set up an effect with the `useEffect` hook:
// Code to run when the component mounts

useEffect(() => {
  axios.get('https://fakestoreapi.com/products')
  .then(response => {setProducts(response.data);
  })
  .catch(error => {
    console.error('Error fetching data:', error);
  });
}, [] );

//  ^ [] Means the effect will run only once, when the component mounts




  return (
    <div className="ProductListPage">
      <ul>
        {products.map(product => (
          <li key={product.id}>{product.title}</li>
        ))}
      </ul>
    </div>
  );
}

export default ProductListPage;
