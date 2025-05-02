import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

const HomePage = () => {
  const [products, setProducts] = useState([]);
  
  const [error, setError] = useState(null);

  useEffect(() => {
    axios
      .get("https://fakestoreapi.com/products")
      .then((response) => {
        setProducts(response.data);
      })
      .catch((error) => {
        setError("Failed to fetch products");

      });
  }, []);

  return (
    <div>
      <h1>Product List</h1>
      <ul>
        {products.map((product) => (
          <li key={product.id} className="prod-container">
            <Link to ={`product/details/${product.id}`}> 
            <img src={product.image} alt={product.title} width="100" />
            <section className="prod-info"> 
              <h2>{product.title}</h2>
              <p>{product.category}</p>   
              <p>Price: ${product.price}</p>      
              <p>{product.description}</p>
            </section>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default HomePage;