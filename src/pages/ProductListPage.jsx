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
.then(productsData => {
  console.log(productsData)
      setProducts(productsData)
});

}, []);

  return (
    <div className="ProductListPage">
      {/* Render list of products here */}
      {products.map((product) => (
        <Link to={`/product/details/${product.id}`}>
          <article key={product.id} className="product-row">
            <img src={product.image} className="w-40 border-4" />
            <div className="font-bold" >{product.title}</div>
            <div>{product.category}</div>
            <div>${product.price}</div>
            <div className="w-80">{product.description}</div>
          </article> 
        </Link>
      ))}
    </div>
  );
}

export default ProductListPage;
