import { useEffect, useState } from "react";
import './ProductListPage.css';
import { Link } from "react-router-dom";

function ProductListPage() {
  const [products, setProducts] = useState([]);

  // Fetch products from the Fake Store API
  useEffect(() => {
    fetch('https://fakestoreapi.com/products')
      .then((response) => response.json())
      .then((data) => setProducts(data))
      .catch((err) => console.error("Error fetching products:", err));
  }, []);

  return (
    <div className="ProductListPage">
      {products.length > 0 ? (
        products.map((product) => (
          <div key={product.id} className="product">
            <img src={product.image} alt={product.title} className="product-image" />
            <div className="product-details">
              <h2>
              <Link to={`/product/details/${product.id}`}> {product.title}</Link></h2>
              <p><strong>Category:</strong> {product.category}</p>
              <p><strong>Price:</strong> ${product.price.toFixed(2)}</p>
              <p className="description">{product.description}</p>
            </div>
          </div>
        ))
      ) : (
        <p>Loading products...</p>
      )}
    </div>
  );
}

export default ProductListPage;
