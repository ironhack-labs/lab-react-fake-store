import { useState } from "react";
import { useEffect } from "react";
import { NavLink } from "react-router-dom";
import "./productList.css";

const apiUrl = "https://fakestoreapi.com/products";

function ProductListPage() {
  // The state variable `products` is currently an empty array [],
  // but you should use it to store the response from the Fake Store API (the list of products).
  const [products, setProducts] = useState([]);

  async function getProducts() {
    try {
      const response = await fetch(apiUrl);
      const jsonResponse = await response.json();

      setProducts(jsonResponse);
    } catch (error) {
      console.log("there was an error");
    }
  }

  // To fetch the list of products, set up an effect with the `useEffect` hook:
  useEffect(() => {
    getProducts();
  }, []);

  return (
    <div className="ProductListPage">
      {products.map((product) => {
        return (
          <NavLink to={`/product/details/${product.id}`}>
            <div className="product-container">
              <img width={"150px"} src={product.image} alt={product.title} />
              <h3>{product.title}</h3>
              <p>{product.category}</p>
              <p>💲{product.price}</p>
              <p>{product.description}</p>
            </div>
          </NavLink>
        );
      })}
    </div>
  );
}

export default ProductListPage;
