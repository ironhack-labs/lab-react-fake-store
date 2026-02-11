import { useState, useEffect } from "react";
import { Link } from "react-router-dom";


function ProductListPage() {
  // The state variable `products` is currently an empty array [], 
  // but you should use it to store the response from the Fake Store API (the list of products).
  const [products, setProducts] = useState([]); // Storing the list of procuts and starts empty.

  // To fetch the list of products, set up an effect with the `useEffect` hook:
  useEffect(() => { // Runs once when the page loads, calls the correct endpoint and savesAPI response to state variable `products`.
    fetch("https://fakestoreapi.com/products")
    .then ((response) => response.json())
    .then ((data) => setProducts(data))
    .catch ((error) => console.error("Error products:", error));
  }, []);


  return (
    <div className="ProductListPage">
      {/* Render list of products here */}
      {products.map((product) => ( // Loop through the list of products and render each product's title, description, and price.
        <div key={product.id}>
          <h2>{product.title}</h2>
          <p>{product.description}</p>
          <p>${product.price}</p>

          <Link to={`/product/details/${product.id}`}>View Details</Link>

        </div>
      ))}
    </div>
  );
}

export default ProductListPage;

//I fetch the list of products from the Fake Store API using useEffect, store them in state with useState, and render them using .map().