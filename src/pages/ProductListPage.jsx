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
      .catch((e) => console.error(e));
  }, []);

  if (products.length === 0) return <p>Loading products...</p>;

  return (
    <div className="product-list">
      {products.map((product) => (
        <div className="card" key={product.id}>
          <img src={product.image} alt={product.title} />
          <h3 className="title">
            <Link to={`/product/details/${product.id}`}>{product.title}</Link>
          </h3>
          <div>{product.category}</div>
          <div>
            <strong>${product.price.toFixed(2)}</strong>
          </div>
          <div className="desc">
            {product.description.length > 80
              ? product.description.slice(0, 80) + "..."
              : product.description}
          </div>
        </div>
      ))}
    </div>
  );
}

export default ProductListPage;
