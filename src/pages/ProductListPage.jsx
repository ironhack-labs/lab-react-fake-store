import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

function ProductListPage() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch("https://fakestoreapi.com/products")
      .then((response) => response.json())
      .then((data) => setProducts(data))
      .catch((error) => console.error("Error fetching products:", error));
  }, []);

  return (
    <div className="product-list-page">
      <h1>Lista de Productos</h1>
      <div className="product-grid">
        {products.map((product) => (
          <Link to={`/product/details/${product.id}`} key={product.id} className="product-card">
            <img src={product.image} alt={product.title} />
            <h2>{product.title}</h2>
            <p>${product.price}</p>
          </Link>
        ))}
      </div>
    </div>
  );
}

export default ProductListPage;
