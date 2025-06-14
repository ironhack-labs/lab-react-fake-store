import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

function ProductListPage() {
const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch("https://fakestoreapi.com/products")
      .then((response) => response.json())
      .then((data) => setProducts(data))
      .catch((error) => console.error("Error fetching products:", error));
  }, []);

  return (
    <div className="ProductListPage p-6 bg-gray-100">
      <h1 className="text-2xl font-bold mb-6">React Fake Store</h1>

      <div className="space-y-4">
        {products.map((product) => (
          <Link
            key={product.id}
            to={`/product/details/${product.id}`}
            className="flex items-center gap-4 bg-white rounded-lg shadow p-4 hover:bg-gray-50 transition"
          >
            <img
              src={product.image}
              alt={product.title}
              className="w-20 h-20 object-contain"
            />

            <div className="flex-1">
              <h3 className="font-semibold">{product.title}</h3>
              <p className="text-sm text-gray-500">{product.category}</p>
            </div>

            <div className="text-right mr-4">
              <p className="text-lg font-bold">${product.price}</p>
            </div>

            <div className="hidden md:block w-1/3 text-sm text-gray-500 truncate">
              {product.description}
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}

export default ProductListPage;
