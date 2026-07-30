import { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

function ProductListPage() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    axios.get("https://fakestoreapi.com")
      .then((response) => setProducts(response.data))
      .catch((error) => console.error("Error:", error));
  }, []);

  return (
    <div className="ProductListPage">
      <h1>Products List</h1>
      <div className="products-list">
        {products.map((product) => (
          <Link 
            to={`/product/details/${product.id}`} 
            key={product.id} 
            className="product-card-link"
            style={{ textDecoration: 'none', color: 'inherit' }}
          >
            <div className="product-card">
              <img src={product.image} alt={product.title} style={{ width: "100px" }} />
              <h3>{product.title}</h3>
              <p>Price: ${product.price}</p>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}

export default ProductListPage;