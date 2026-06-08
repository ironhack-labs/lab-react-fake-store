import { useState, useEffect } from "react";
import { Link } from "react-router-dom";


function ProductListPage() {
  // The state variable `products` is currently an empty array [], 
  // but you should use it to store the response from the Fake Store API (the list of products).
  // to save the productlist
  const [products, setProducts] = useState([]);

  // To fetch the list of products, set up an effect with the `useEffect` hook:

  // When the page open first time, work once.
  useEffect(() => {
    // como siempre, bring data from API
    fetch("https://fakestoreapi.com/products")
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        // Save the received product list to React state
        setProducts(data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  return (
    <div className="ProductListPage">
      {/* Render list of products here */}
      <h1>Products</h1>

      {/* Print each product */}
      {products.map((product) => {
        return (
          <div key={product.id}>
            <Link to={`/product/details/${product.id}`}>
              <h3>{product.title}</h3>
            </Link>
            
            <p>Price: {product.price}</p>
            <p>Category: {product.category}</p>
            <img src={product.image} alt={product.title} width="100" />
          </div>
        );
      })}
    </div>
  );
}

export default ProductListPage;
