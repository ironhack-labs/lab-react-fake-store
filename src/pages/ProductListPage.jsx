import { useState, useEffect } from "react";
import { Link } from "react-router-dom";


function ProductListPage() {
  // The state variable `products` is currently an empty array [], 
  // but you should use it to store the response from the Fake Store API (the list of products).
  const [products, setProducts] = useState([]);

  // To fetch the list of products, set up an effect with the `useEffect` hook:
  useEffect(() => {
  fetch("https://fakestoreapi.com/products")
    .then(response => response.json())
    .then(data => {
      setProducts(data);   // save API response in state
    })
    .catch(err => console.log(err));
}, []);



  return (
    <div className="ProductListPage">
      {/* Render list of products here */}
      <h1>Products</h1>

    {products.map(product => (
  <div key={product.id} className="product-card">
    <Link to={`/product/details/${product.id}`}>
      <h3>{product.title}</h3>
      <img src={product.image} alt={product.title} width="150" />
    </Link>
    <p>{product.price} €</p>
  </div>
))}
    </div>
  );
}

export default ProductListPage;
