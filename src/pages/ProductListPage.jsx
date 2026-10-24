import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

const API_URL = "https://fakestoreapi.com/products";

function ProductListPage() {
  const [products, setProducts] = useState([]);

  // Fetch the list of products once, when the component mounts
  useEffect(() => {
    axios
      .get(API_URL)
      .then((response) => setProducts(response.data))
      .catch((error) => console.log(error));
  }, []);

  return (
    <div className="ProductListPage flex flex-col gap-4 p-4 max-w-5xl mx-auto">
      {products.map((product) => (
        <Link
          key={product.id}
          to={`/product/details/${product.id}`}
          className="flex items-center gap-6 p-4 border rounded shadow-sm hover:shadow-md transition-shadow"
        >
          <img
            src={product.image}
            alt={product.title}
            className="h-20 w-20 object-contain"
          />
          <span className="flex-1 font-semibold text-left">{product.title}</span>
          <span className="w-32 text-gray-500 capitalize">{product.category}</span>
          <span className="w-20 font-bold">${product.price}</span>
          <span className="hidden md:block w-1/3 text-sm text-gray-600 text-left line-clamp-2">
            {product.description}
          </span>
        </Link>
      ))}
    </div>
  );
}

export default ProductListPage;
