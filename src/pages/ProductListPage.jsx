import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

function ProductListPage() {
  // The state variable `products` is currently an empty array [],
  // but you should use it to store the response from the Fake Store API (the list of products).
  const [products, setProducts] = useState([]);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);

  // To fetch the list of products, set up an effect with the `useEffect` hook:
  const url = "https://fakestoreapi.com/products";

  useEffect(() => {
    async function fetchProducts() {
      try {
        setLoading(true);
        const response = await fetch(url);
        const data = await response.json();
        setProducts(data);
        setLoading(false);
      } catch (error) {
        setError(error);
        setLoading(false);
      }
    }
    fetchProducts();
  }, []);
  const style = {
    width: "100px",
    height: "100px",
  };
  return (
    <div className="ProductListPage">
      {loading && <p>Loading...</p>}
      {error && <p>Something went wrong: {error.message}</p>}
      <h1>Products</h1>
      <ul>
        {products.map((product) => (
          <li className="card" key={product.id}>
            <Link to={`/products/${product.id}`}>
              <img style={style} src={product.image} alt={product.title} />
              <h2>{product.title}</h2>
            </Link>
            <p>{product.description}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default ProductListPage;
