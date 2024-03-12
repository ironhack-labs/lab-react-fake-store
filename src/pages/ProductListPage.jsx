import axios from "axios";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";


function ProductListPage() {
  // The state variable `products` is currently an empty array [], 
  // but you should use it to store the response from the Fake Store API (the list of products).
  const [products, setProducts] = useState([]);

  // To fetch the list of products, set up an effect with the `useEffect` hook:
useEffect(() => {
  async function getAllProducts() {
    axios ("https://fakestoreapi.com/products")
      .then((response) => {
        console.log(response)
        setProducts(response.data);
      })
      .catch((error) => {});
  }
  getAllProducts();
  console.log(products)
}, []);

  return (
    <div className="ProductListPage">
      {products.map((product) => (
       <Link key={product.id} to={`/product/details/${product.id}`} > 
        <div className="card">
          <h2>
            {product.title}
          </h2>
          <h3>{product.category}</h3>
          <img src={product.image} alt= "product image" style={{height:"200px"}} />
          <h3>{product.price}</h3>
        </div>
        </Link>
      ))}
    </div>
  );
}

export default ProductListPage;
