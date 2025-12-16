import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

function ProductListPage() {
  // The state variable `products` is currently an empty array [],
  // but you should use it to store the response from the Fake Store API (the list of products).
  const [products, setProducts] = useState([]);

  // To fetch the list of products, set up an effect with the `useEffect` hook:
  useEffect(() => {
    fetch("https://fakestoreapi.com/products")
      .then((response) => response.json())
      .then((data) => setProducts(data))
      .catch((error) => console.error("Error fetching products:", error));
  }, []);

  if (!products.length) {
    return <div>Loading products...</div>;
  }
  return (
    <div className="ProductListPage">
      {/* Render list of products here */}
      <h1>Product List</h1>
      <ul>
        {products.length > 0 &&
          products.map((product) => (
            <Link key={product.id} to={`/product/details/${product.id}`}>
              <li key={product.id} className="card">
                <img src={product.image} alt={product.title} />
                <h3>{product.title}</h3>
                <p>{product.category}</p>
                <p>${product.price}</p>
                <p className="description">{product.description}</p>
              </li>
            </Link>
          ))}
      </ul>
    </div>
  );
}

export default ProductListPage;
