import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "./ProductListPage.css";

function ProductListPage() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch(`https://fakestoreapi.com/products`)
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        setProducts(data);
      })
      .catch((error) => {
        console.error("Error fetching products:", error);
      });
  }, []);

  return (
   <div className="product-grid">
      {products.map((product) => (
        // Wrap the whole card in a Link
        <Link
          to={`/product/details/${product.id}`} // <-- navigate with product ID
          key={product.id}
          className="product-card-link"
        >
          <div className="product-card">
            <img
              src={product.image}
              alt={product.title}
              className="product-image"
            />
            <div className="product-info">
              <h3 className="product-title">{product.title}</h3>
              <p className="product-description">{product.description}</p>
              <div className="product-price">€{product.price}</div>
            </div>
          </div>
        </Link>
      ))}
    </div>
  );
}
export default ProductListPage;
