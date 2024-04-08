import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import classes from "../style/ProductListPage.module.css";

function ProductListPage() {
  // The state variable `products` is currently an empty array [],
  // but you should use it to store the response from the Fake Store API (the list of products).
  const [products, setProducts] = useState([]);

  // To fetch the list of products, set up an effect with the `useEffect` hook:
  const getAllProducts = async () => {
    try {
      const response = await fetch("https://fakestoreapi.com/products");
      const data = await response.json();
      setProducts(data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getAllProducts();
  }, []);

  return (
    <div className={classes.ProductListPage}>
      {products.map((product) => (
        <Link key={product.id} to={`/product/details/${product.id}`}>
          <div className={classes.ProductItem}>
            <img src={product.image} alt={product.title} />
            <h3>{product.title}</h3>
            <p>{product.category}</p>

            <p>${product.price}</p>
            <p>${product.description}</p>
          </div>
        </Link>
      ))}
    </div>
  );
}

export default ProductListPage;
