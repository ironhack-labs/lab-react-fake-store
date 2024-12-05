import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

function ProductListPage() {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    axios
      .get("https://fakestoreapi.com/products")
      .then((response) => {
        setProducts(response.data);
        setLoading(false);
      })
      .catch((err) => {
        setError(err.message);
        setLoading(false);
      });
  }, []);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error}</div>;
  }

  return (
    <div className="ProductListPage">
      <h1>Product List</h1>
      <ul>
        {products.map((product) => (
          <li key={product.id}>
            <Link to={`/product/details/${product.id}`}>
              <h2>{product.title}</h2>
              <p>{product.price} USD</p>
              <img src={product.image} alt={product.title} width="100" />
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default ProductListPage;
