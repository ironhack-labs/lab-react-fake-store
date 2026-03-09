import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

function ProductListPage() {
  // 1. Initialize state for the product list as an empty array
  const [products, setProducts] = useState([]);

  // 2. Use useEffect to fetch data from the API on component mount
  useEffect(() => {
    fetch("https://fakestoreapi.com/products")
      .then((res) => res.json())
      .then((data) => setProducts(data))
      .catch((err) => console.error("Error fetching products:", err));
  }, []);

  return (
    <div className="ProductListPage">
      <h1>Product List</h1>
      {products.map((product) => (
        <div key={product.id} className="product-card">
          <Link to={`/product/details/${product.id}`}>
            <h3>{product.title}</h3>
            <img src={product.image} alt={product.title} style={{ width: "100px" }} />
            <p>${product.price}</p>
          </Link>
        </div>
      ))}
    </div>
  );
}

export default ProductListPage;