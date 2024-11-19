import React, { useState, useEffect } from 'react';
import  '../styles/ProductListPage.css';
import { Link } from "react-router-dom";


function ProductListPage() {
  // The state variable `products` is currently an empty array [], 
  // but you should use it to store the response from the Fake Store API (the list of products).
 
  const [products, setProducts] = useState([]);
  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await fetch("https://fakestoreapi.com/products");
        const data = await response.json();
        setProducts(data);
        
      } catch (error) {
       
      }
    };

    fetchProducts();
  }, []);


  return (
    <div>
      <div  className='product-list'>
        {products.map((product) => (
          <div key={product.id} className='product'>
            <img src={product.image} alt={product.title} />
            <h2>{product.title}</h2>
            <p>${product.price}</p>
            <Link to={`/product/details/${product.id}`}>View Details</Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProductListPage;
 





