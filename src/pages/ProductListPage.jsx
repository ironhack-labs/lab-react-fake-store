
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

function ProductListPage() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await axios.get("https://fakestoreapi.com/products");
        setProducts(response.data);
      } catch (error) {
        console.error("Error fetching products:", error);
      }
    };

    fetchProducts();
  }, []);

  return (
    <div className="ProductListPage">
      <h2>Products</h2>
      <div className="grid grid-cols-3 gap-4">
        {products.map((product) => (
          <Link key={product.id} to={`/product/details/${product.id}`}>
            <div className="card">
              <h3>{product.title}</h3>
              <p>${product.price}</p>
              <img src={product.image} alt={product.title} />
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}

export default ProductListPage;