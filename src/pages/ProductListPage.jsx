import { useEffect, useState } from "react";
import { Link } from "react-router-dom"; 
import "../pages/ProductListPage.css"

const apiUrl = "https://fakestoreapi.com/products";

function ProductListPage() {
  // The state variable `products` is currently an empty array [], 
  // but you should use it to store the response from the Fake Store API (the list of products).
  const [products, setProducts] = useState([]);

  async function getProducts() {
    try {
      const response = await fetch(apiUrl);
      const jsonResponse = await response.json();
      console.log(jsonResponse); // Log data to see structure
      setProducts(jsonResponse); // Set the fetched data to the state
    } catch (error) {
      console.log("There was an error");
    }
  }

  // To fetch the list of products, set up an effect with the `useEffect` hook:
  useEffect(() => {
    getProducts();
  }, []);

  return (
    <div className="ProductListPage">
      <h1>Products</h1>
      <ul>
        {products.map((product) => (
          <Link to={`/product/details/${product.id}`} key={product.id}>
            <li>
              <h2>{product.title}</h2>
              <p>Price: ${product.price}</p>
              <img src={product.image} alt={product.title} />
            </li>
          </Link>
        ))}
      </ul>
    </div>
  );
}

export default ProductListPage;
