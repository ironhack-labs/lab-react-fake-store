import { useEffect, useState } from "react";
import {Link} from "react-router-dom"



function ProductListPage() {
  const [products, setProducts] = useState([]);

  
  
  useEffect(() => {
      fetch('https://fakestoreapi.com/products')
    .then(res=>res.json())
    .then(json=>setProducts(json))
   
    }, [] );  
  
           
  // The state variable `products` is currently an empty array [], 
  // but you should use it to store the response from the Fake Store API (the list of products).
 

  // To fetch the list of products, set up an effect with the `useEffect` hook:


  return (
   
    <div className="ProductListPage">
  
      {products.map(product =><li key ={product.id}>  <Link to ={`/product/details/${product.id}`} > {product.category} {product.description} {product.price} {product.title}  <img src = {product.image}></img>
      </Link></li> ) }
        
    </div>
  );
}

export default ProductListPage;
