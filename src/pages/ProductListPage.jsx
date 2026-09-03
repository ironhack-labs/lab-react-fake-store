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
      <div className="flex flex-col gap-4 w-full">
        {products.map((product) => (
          <Link
            to={`/product/details/${product.id}`}
            key={product.id}
            className="bg-white border rounded-lg shadow-sm p-4 flex flex-row items-center gap-4 hover:shadow-md transition-shadow"
          >
            <img
              src={product.image}
              alt={product.title}
              className="h-24 w-24 object-contain flex-shrink-0"
            />
            <div className="flex flex-col text-left">
              <h2 className="text-sm font-semibold line-clamp-2">
                {product.title}
              </h2>
              <p className="text-blue-600 font-bold mt-2">${product.price}</p>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}

export default ProductListPage;
