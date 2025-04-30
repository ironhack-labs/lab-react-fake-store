import { useEffect, useState } from "react";
import axios from "axios";
import {Link} from "react-router-dom";


function ProductListPage() {
  // The state variable `products` is currently an empty array [], 
  // but you should use it to store the response from the Fake Store API (the list of products).
  const [products, setProducts] = useState([]);

  // To fetch the list of products, set up an effect with the `useEffect` hook:
  useEffect(() =>{
    axios.get("https://fakestoreapi.com/products")
    .then((response) => {
      // Handle success
      setProducts(response.data);
    })
    .catch((error) => {
      // Handle error
      console.error("Error:", error);
    })
  }, []);

  return (
    <div className="ProductListPage">
      {products.map((product) => (
        <Link
        to={`/product/details/${product.id}`}
        key={product.id}
        style={{ textDecoration: "none", color: "inherit" }}
        >
        <div key={product.id} className="Product-card">
          <img src={product.image} alt={product.title} className="Product-element Product-img" />
            
            <h2 className="Product-element" style={{fontWeight: "bold"}}>{product.title}</h2>
            <p className="Product-element">{product.category}</p>
            <p className="Product-element">${product.price}</p>
            <p className="Product-element" id="Product-description">{product.description}</p>
        </div>
        </Link>
      ))}
    </div>
  );
}

export default ProductListPage;
