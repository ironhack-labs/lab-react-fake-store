import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

function ProductListPage() {
  const [products, setProducts] = useState([]);

  // Iteration 1: Fetch all products
  useEffect(() => {
    axios
      .get("https://fakestoreapi.com/products")
      .then((response) => {
        setProducts(response.data);
      })
      .catch((error) => console.log(error));
  }, []);

  return (
    <div className="ProductListPage">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 p-6">
        {products.map((product) => (
          // Iteration 2: Each product links to its details page
          <Link
            key={product.id}
            to={`/product/details/${product.id}`}
            className="border rounded-lg p-4 shadow hover:shadow-md transition flex flex-col items-center text-center"
          >
            <img
              src={product.image}
              alt={product.title}
              className="w-32 h-32 object-contain mb-4"
            />
            <h2 className="text-sm font-semibold">{product.title}</h2>
            <p className="text-gray-500 mt-2">${product.price}</p>
          </Link>
        ))}
      </div>
    </div>
  );
}

export default ProductListPage;
