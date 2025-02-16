import { useState, useEffect } from "react";
import { Link } from "react-router-dom";


function ProductListPage() {
  // The state variable `products` is currently an empty array [], 
  // but you should use it to store the response from the Fake Store API (the list of products).
  const [products, setProducts] = useState([]);

  // To fetch the list of products, set up an effect with the `useEffect` hook:
  useEffect(() => {
    fetch('https://fakestoreapi.com/products')
    .then(res=>res.json())
    .then(json=>setProducts(json))
  }, [] );

  return (
    <div className="ProductListPage">
      {products.map(product => (
        <div className="card">
        <Link to={`/product/details/${product.id}`} key={product.id}>
          <img src={product.image} alt={product.title} />
          <b>{product.title}</b>
          <p>{product.category}</p>
          <p>{product.price}</p>
          <p>{product.description}</p>
        </Link>
        </div>
      ))}
    </div>
  );
}

export default ProductListPage;


