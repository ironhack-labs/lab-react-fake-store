import { useState, useEffect } from "react";
import axios from "axios";
import {Link} from "react-router-dom";

function ProductListPage() {
  // The state variable `products` is currently an empty array [], 
  // but you should use it to store the response from the Fake Store API (the list of products).
  const [products, setProducts] = useState([]);
  
  // To fetch the list of products, set up an effect with the `useEffect` hook:
  useEffect(() => {
    axios
      .get("https://fakestoreapi.com/products")
      .then((response) => {
        //console.log(response);
        setProducts(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  })

  return (
    <div className="ProductListPage">
      {products && products.map((product)=>(
        <div className="ProductCard" key={product.id}>
          <Link to={`/product/details/${product.id}`}>
            <img className = "ProductImage" src={product.image} alt={product.title} />
          </Link>
          <span className= "ProductTitle">{product.title}</span>
          <span className = "ProductTitle">${product.price}</span>
          <span className = "ProductTitle">{product.category}</span>
          <span className = "ProductTitle">{product.description}</span>
        </div>
      ))}
    </div>
  );
}

export default ProductListPage;
