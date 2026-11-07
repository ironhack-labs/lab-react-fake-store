import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

function ProductListPage() {
  // The state variable `products` is currently an empty array [],
  // but you should use it to store the response from the Fake Store API (the list of products).
  const [products, setProducts] = useState([]);

  // To fetch the list of products, set up an effect with the `useEffect` hook:

  useEffect(() => {
    fetch("https://fakestoreapi.com/products")
      .then((response) => response.json())
      .then((data) => {
        setProducts(data);
      });
  }, []);

  return (
  <div>
    <h1>Products</h1>

    {products.map((product) => (
      <div key={product.id}>
        <Link to={`/product/details/${product.id}`}>
        <h3>{product.title}</h3>
        <img src={product.image} alt={product.title} width="150" /></Link>
      </div>
    ))}
  </div>
);
}
export default ProductListPage;
