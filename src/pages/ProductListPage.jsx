import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

function ProductListPage() {
  // The state variable `products` is currently an empty array [],
  // but you should use it to store the response from the Fake Store API (the list of products).
  const [products, setProducts] = useState([]);

  // To fetch the list of products, set up an effect with the `useEffect` hook:
  useEffect(() => {
    axios
      .get("https://fakestoreapi.com/products")
      .then((response) => {
        setProducts(response.data);
      })
      .catch((error) => {
        console.error("Error fetching the products:", error);
      });
  }, []);

  return (
    <div className="ProductListPage px-4 py-6">
      {/* Render list of products here */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {products.map((product) => (
          <Link
            to={`/product/details/${product.id}`}
            key={product.id}
            className="border rounded-lg shadow-sm p-4 flex flex-col items-center text-center hover:shadow-md transition-shadow"
          >
            <img
              src={product.image}
              alt={product.title}
              className="h-40 w-auto object-contain mb-4"
            />
            <h2 className="text-sm font-semibold line-clamp-2">
              {product.title}
            </h2>
            <p className="text-blue-600 font-bold mt-2">${product.price}</p>
          </Link>
        ))}
      </div>
    </div>
  );
}

export default ProductListPage;
