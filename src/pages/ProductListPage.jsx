import { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";

function ProductListPage() {
  // The state variable `products` is currently an empty array [],
  // but you should use it to store the response from the Fake Store API (the list of products).
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const urlAllProducts = "https://fakestoreapi.com/products";

  // To fetch the list of products, set up an effect with the `useEffect` hook:
  useEffect(() => {
    fetch(urlAllProducts)
      .then((resp) => {
        return resp.json();
      })
      .then((data) => {
        setProducts(data);
      })
      .catch((err) => setError(err))
      .finally(() => setLoading(false));
  }, []);

  if (loading) return <div> loading... </div>;

  return (
    <div className="ProductListPage">
      {products.map((product) => (
        <NavLink to={`/product/details/${product.id}`}>
          <div key={product.id} className="card">
            <img src={product.image} />
            <h2>{product.title} </h2>
            <p>{product.category} </p>
            <h2>$ {product.price} </h2>
            <p>{product.description.slice(0, 100)}... </p>
          </div>
        </NavLink>
      ))}
    </div>
  );
}

export default ProductListPage;
