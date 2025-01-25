import { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

function ProductListPage() {
  const [products, setProducts] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    axios.get("https://fakestoreapi.com/products")
      .then((response) => {
        setProducts(response.data);
      })
      .catch((error) => {
        console.error("Error fetching products:", error);
        setError(error);
      });
  }, []);

  if (error) {
    return <div>Error: {error.message}</div>;
  }

  if (products.length === 0) {
    return <div>Loading...</div>; // Simplified loading message
  }

  return (
    <div className="ProductListPage container">
      <h1>Welcome to Our Store!</h1>
      <ul className="space-y-4">
        {products.map((product) => (
          <li key={product.id} className="border p-4 rounded-md shadow-md flex items-start">
            <Link to={`/product/details/${product.id}`}> {/* Link to product details */}
              <img
                src={product.image}
                alt={product.title}
                className="w-32 h-32 object-contain mr-4"
              />
              <div>
                <h2 className="text-lg font-semibold mb-1">{product.title}</h2>
                <p className="text-gray-600 mb-1">Category: {product.category}</p>
                <p className="text-blue-500 font-bold mb-1">${product.price}</p>
                <p className="text-sm text-gray-700">{product.description}</p>
              </div>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default ProductListPage;