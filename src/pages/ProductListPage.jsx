// ProductListPage.jsx
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

function ProductListPage() {
  const [products, setProducts] = useState([]);

  // Fetch products from the Fake Store API
  useEffect(() => {
    fetch("https://fakestoreapi.com/products")
      .then((response) => response.json())
      .then((data) => setProducts(data))
      .catch((error) => console.error("Error fetching products:", error));
  }, []);

  return (
    <div className="ProductListPage container">
      <h1>Product List</h1>
      <div className="product-list">
        {products.map((product) => (
          <div key={product.id} className="product-card card">
            <img src={product.image} alt={product.title} className="product-image" />
            <h2>{product.title}</h2>
            <p>${product.price}</p>
            <Link to={`/product/details/${product.id}`}>
              <button className="btn-primary">View Details</button>
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
}

export default ProductListPage;

