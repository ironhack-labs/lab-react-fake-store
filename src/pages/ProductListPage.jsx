import { useState } from "react";
import { useEffect } from "react";
import { Link } from "react-router-dom";

function ProductListPage() {
  // The state variable `products` is currently an empty array [],
  // but you should use it to store the response from the Fake Store API (the list of products).
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await fetch("https://fakestoreapi.com/products");
        const parsed = await response.json();
        setProducts(parsed);
      } catch (err) {
        console.log("error", err);
      }
    };
    fetchProducts();
  }, []);

  // To fetch the list of products, set up an effect with the `useEffect` hook:

  return (
    <div className="ProductListPage">
      {products.map((oneProduct) => {
        return (
          <Link key={oneProduct.id} to={`/product/details/${oneProduct.id}`}>
            <div className="card">
              <img src={oneProduct.image} alt={oneProduct.title} />

              <h3>{oneProduct.title}</h3>

              <span>{oneProduct.category}</span>

              <span>{`$${oneProduct.price}`}</span>

              <span>{oneProduct.description}</span>
            </div>
          </Link>
        );
      })}
    </div>
  );
}

export default ProductListPage;
