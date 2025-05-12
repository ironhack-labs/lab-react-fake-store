import { useEffect } from "react";
import { useState } from "react";
import { Link } from "react-router-dom";

function ProductListPage() {
  // The state variable `products` is currently an empty array [],
  // but you should use it to store the response from the Fake Store API (the list of products).
  const [products, setProducts] = useState([]);
  const apiUrl = "https://fakestoreapi.com/products";

  // To fetch the list of products, set up an effect with the `useEffect` hook:
  const handleFetch = async () => {
    try {
      const response = await fetch(apiUrl);
      const data = await response.json();
      setProducts(data);
    } catch (error) {
      console.error("Error fetching products:", error);
    }
  };
  useEffect(() => {
    handleFetch();
  }, []);

  return (
    <div className="ProductListPage">
      <div className="container">
        {products.map((product) => (
          <Link
            onClick={() => handleClick(product.id)}
            to={`/product/details/${product.id}`}
            key={product.id}
          >
            <li key={product.id} className="card">
              <img src={product.image} alt={product.title} />
              <h1>{product.title}</h1>
              <p>{product.description}</p>
              <p>Price ${product.price}</p>
            </li>
          </Link>
        ))}
      </div>
    </div>
  );
}

export default ProductListPage;
