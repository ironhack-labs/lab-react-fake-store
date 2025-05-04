import axios from 'axios';
import React, { useEffect, useState } from 'react'; 
import { Link } from 'react-router-dom';



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
      console.log(error);
      
    });
  },[]);
 


  // To fetch the list of products, set up an effect with the `useEffect` hook:


  return (
    <div className="ProductListPage">
      {/* Render list of products here */}
      <ul>
        {products.map((product) => ( 
          <li key={product.id}>
            <Link to={`/product/details/${product.id}`}>
            <h2>{product.title}</h2>
            <p>{product.description}</p>
            <p>Price: ${product.price}</p>
            <img src={product.image} alt={product.title}/> 
            </Link>
          </li>
        ))}
      </ul>

    </div>
  );
}

export default ProductListPage;
