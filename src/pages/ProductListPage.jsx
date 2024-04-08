import { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

function ProductListPage() {
  // The state variable `products` is currently an empty array [],
  // but you should use it to store the response from the Fake Store API (the list of products).
  const [products, setProducts] = useState([]);

  // To fetch the list of products, set up an effect with the `useEffect` hook:
  const productBring = async () => {
    try {
      const response = await axios.get("https://fakestoreapi.com/products");
      console.log(response);
      setProducts(response.data);
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    productBring();
  }, []);
  return (
    <div className="ProductListPage">
      {products.map((product) => (
        <Link to={`/product/details/${product.id}`} key={product.id}>
          <li>
            <img src={product.image} />
            <h2>{product.title}</h2>
            <h2>${product.price} CA</h2>
            <h2>{product.description}</h2>
            <h2>{product.category}</h2>
          </li>
        </Link>
      ))}
    </div>
  );
}

export default ProductListPage;
