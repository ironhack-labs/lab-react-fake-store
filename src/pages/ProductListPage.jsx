import { useState, useEffect } from "react";
import { Link } from "react-router-dom";



function ProductListPage() {
  // The state variable `products` is currently an empty array [], 
  // but you should use it to store the response from the Fake Store API (the list of products).
  const [products, setProducts] = useState([]);

  useEffect(
    () => {
       fetch('https://fakestoreapi.com/products')
  .then(response => response.json())
  .then(data => setProducts(data)) 
  .catch (error => console.log(error))
      
    }, []
  ) 

 const allProducts = products.map(product => 
          <Link key = {product.id} to ={`/product/details/${product.id}`}>
          <div  className="product">
            <img src={product.image} alt="product_image" />
            <div>{product.title}</div>
            <div>{product.price}</div>
            <div>{product.description}</div>
            <div>{product.category}</div>
             </div>
             </Link>
          )   


  return (
    <div className="ProductListPage">    
      <section>{allProducts}</section>
    </div>
  );
}

export default ProductListPage;
