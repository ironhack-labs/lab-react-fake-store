import { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom"; 

function ProductListPage() {
  
  const [products, setProducts] = useState([]);

  
  useEffect(() => {
   
    axios
      .get("https://fakestoreapi.com/products")
      .then((response) => {
       
        setProducts(response.data);
      })
      .catch((error) => {
        
        console.error("There was an error fetching the products!", error);
      });
  }, []); 

  return (
    <div className="ProductListPage">
      <h1>Product List</h1>
      <div className="product-list">
        
        {products.length > 0 ? (
          products.map((product) => (
            <div key={product.id} className="product-card">
              <h2>{product.title}</h2>
              <p>{product.description}</p>
              <p>Price: ${product.price}</p>
              <img src={product.image} alt={product.title} />

             
              <Link to={`/product/details/${product.id}`}>View Details</Link>
            </div>
          ))
        ) : (
          <p>Loading products...</p> // Show loading message if products haven't been fetched yet
        )}
      </div>
    </div>
  );
}

export default ProductListPage;
