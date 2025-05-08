import { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

function ProductListPage() {
  // The state variable `products` is currently an empty array [],
  // but you should use it to store the response from the Fake Store API (the list of products).
  const [products, setProducts] = useState([]);

  // To fetch the list of products, set up an effect with the `useEffect` hook:
  useEffect(() => {
    fetchProducts();
  }, []);

  const fetchProducts = async () => {
    try {
      const response = await axios.get("https://fakestoreapi.com/products");
      setProducts(response.data); // Save response data in state
    } catch (error) {
      console.error("Error fetching products:", error);
    }
  };

  return (
    <div className="ProductListPage">
      <h1>Products List</h1>
      <ul>
        {products.map((product) => (
          <li className="card" key={product.id}>
            <Link to={`/product/details/${product.id}`}>
              <div>
                <img
                  src={product.image}
                  alt={product.title}
                  style={{ width: "100px", height: "100px" }}
                />
                <h2>{product.title}</h2>
                <p>Price: ${product.price}</p>
                <p>Description: {product.description}</p>
              </div>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default ProductListPage;
