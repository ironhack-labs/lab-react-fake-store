import { useState, useEffect } from "react";
import "./ProductListPage.css";
import { Link } from "react-router-dom";


function ProductListPage() {
  // The state variable `products` is currently an empty array [], 
  // but you should use it to store the response from the Fake Store API (the list of products).
  const [products, setProducts] = useState([]);

  // To fetch the list of products, set up an effect with the `useEffect` hook:
useEffect(()=>{
  fetch('https://fakestoreapi.com/products')
  .then(response => response.json())
  .then(jsonData => setProducts(jsonData))
  .catch(error => console.error(error));
}, [])

  return (
    <div className="ProductListPage">
      {/* Render list of products here */}
        {
          products.map((product)=>{
            return(
              <Link to={`/product/details/${product.id}`} key ={product.id} >
                <div className="product-card">
                  <img src={product.image} alt={product.title} />
                  <p className="product-title">{product.title}</p>
                  <p>{product.category}</p>
                  <p>{'$'+product.price.toFixed(2)}</p>
                  <p className="product-description">{product.description}</p>
                </div>
              </Link>
            )
          })
        }
      
    </div>
  );
}

export default ProductListPage;
