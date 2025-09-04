import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

function ProductListPage() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch("https://fakestoreapi.com/products")
      .then((response) => response.json())
      .then((data) => setProducts(data))
      .catch((error) => console.error("Error fetching products:", error));
  }, []);

  if (!products.length) {
    return <p>Loading products...</p>;
  }

  return (
    <div className="ProductListPage">
      <h1>Products</h1>
      <ul>
        {products.map((p) => (
          <li key={p.id}>
            <Link to={`/product/details/${p.id}`}>
              <img src={p.image} alt={p.title} width="80" />
              <span>{p.title}</span> — ${p.price}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default ProductListPage;
