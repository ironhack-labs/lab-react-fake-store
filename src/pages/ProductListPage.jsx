import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

function ProductListPage() {
  const [products, setProducts] = useState([]);

  // Fetch products from the Fake Store API
  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await axios.get("https://fakestoreapi.com/products");
        setProducts(response.data);
      } catch (error) {
        console.error("Failed to fetch products:", error);
      }
    };

    fetchProducts();
  }, []);

  return (
    <div className="ProductListPage">
      <div className="container mx-auto p-6">
        <h1 className="text-3xl font-bold mb-6">Products List</h1>
        <ul className="space-y-4">
          {products.map((product) => (
            <li
              key={product.id}
              className="flex items-center border border-gray-200 rounded-lg p-4 w-full bg-white shadow-md"
            >
              {/* Product image */}
              <div className="w-32 h-32 flex-shrink-0">
                <Link to={`/products/${product.id}`}>
                  <img
                    src={product.image}
                    alt={product.title}
                    className="w-full h-full object-cover rounded-lg"
                    onError={(e) => {
                      e.target.onerror = null;
                      e.target.src = "default-image-url.jpg";
                    }}
                  />
                </Link>
              </div>

              {/* Product details */}
              <div className="ml-4 flex flex-col w-full">
                <Link to={`/products/${product.id}`}>
                  <span className="text-xl font-semibold text-gray-800 hover:underline">
                    {product.title}
                  </span>
                </Link>
                <span className="text-sm text-gray-500">
                  {product.category}
                </span>
                <span className="text-lg font-bold text-gray-900 mt-2">
                  ${product.price}
                </span>
                <span className="text-sm text-gray-600 mt-1">
                  {product.description}
                </span>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default ProductListPage;
