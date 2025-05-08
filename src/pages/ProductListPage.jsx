import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

function ProductListPage() {
  // The state variable `products` is currently an empty array [],
  // but you should use it to store the response from the Fake Store API (the list of products).

  const [products, setProducts] = useState([]);
  useEffect(() => {
    fetch("https://fakestoreapi.com/products")
      .then((response) => response.json())
      .then((data) => {
        setProducts(data);
      })
      .catch((error) => console.log("Error, couldn't fetch products", error));
  }, []);

  // To fetch the list of products, set up an effect with the `useEffect` hook:

  return (
    <div className="ProductListPage">
      <h1>Product List</h1>
      <ul>
        {products.map((product) => (
          <li key={product.id} className="card">
            <Link to={`/product/details/${product.id}`}>
              <h2>
                <strong>{product.title}</strong>
              </h2>
              <p>{product.description}</p>
              <p>
                <strong>{product.price} Euro</strong>
              </p>
              <img src={product.image} alt={product.title} />
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default ProductListPage;
