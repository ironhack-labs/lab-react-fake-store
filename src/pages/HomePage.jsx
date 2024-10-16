import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

const HomePage = () => {
  const [products, setProducts] = useState([]);

  // Fetch products from the Fake Store API
  //   useEffect(() => {
  //     const fetchProducts = async () => {
  //       try {
  //         const response = await axios.get("https://fakestoreapi.com/products");
  //         setProducts(response.data);
  //       } catch (error) {
  //         console.error("Failed to fetch products:", error);
  //       }
  //     };

  //     fetchProducts();
  //   }, []);

  return (
    <div className="container mx-auto p-6">
      <h1 className="text-3xl font-bold mb-6">Products List</h1>
      <ul className="space-y-4">
        {products.map((product) => (
          <li
            className="flex items-center border border-gray-200 rounded-lg p-4 w-full bg-white shadow-md"
            key={product.id}
          >
            <Link
              to={`/products/${product.id}`}
              className="flex items-center w-full"
            >
              {/* Product image */}
              <div className="w-32 h-32 flex-shrink-0">
                <img
                  src={product.image}
                  alt={product.title}
                  className="w-full h-full object-cover rounded-lg"
                />
              </div>

              {/* Product details */}
              <div className="ml-4 flex flex-col w-full">
                <span className="text-xl font-semibold text-gray-800">
                  {product.title}
                </span>
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
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default HomePage;
