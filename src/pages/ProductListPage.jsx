import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import ProductCard from "../components/ProductCard";

function ProductListPage() {
  // The state variable `products` is currently an empty array [],
  // but you should use it to store the response from the Fake Store API (the list of products).
  const [products, setProducts] = useState([]);

  // To fetch the list of products, set up an effect with the `useEffect` hook:
  const getAllProducts = () => {
    axios
      .get("https://fakestoreapi.com/products")
      .then((response) => setProducts(response.data))
      .catch((error) => console.log(error));
  };

  useEffect(() => {
    getAllProducts();
  }, []);

  return (
    <div className="ProductListPage">
      {products.map((product) => (
        <Link key={product.id} to={`/product/details/${product.id}`}>
          <ProductCard product={product} />
        </Link>
      ))}
    </div>
  );
}

export default ProductListPage;
