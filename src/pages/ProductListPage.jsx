import { useState, useEffect } from "react";
import { Link } from "react-router-dom";


function ProductListPage() {
  // The state variable `products` is currently an empty array [],
  // but you should use it to store the response from the Fake Store API (the list of products).
  const [products, setProducts] = useState([]);

  // To fetch the list of products, set up an effect with the `useEffect` hook:
  useEffect(() => {
    fetch("https://fakestoreapi.com/products")
      .then((response) => response.json())
      .then((data) => setProducts(data))
      .catch((error) => console.error(error));
  }, []);

  return (
    <div className="ProductListPage container">
      {/* Render list of products here */}
      <div className="bg-white rounded-lg shadow divide-y divide-gray-200 text-left">
        {products.map((product) => (
          <Link
            key={product.id}
            to={`/product/details/${product.id}`}
            className="ProductCard flex items-center gap-6 p-6 hover:bg-gray-50"
          >
            <img
              src={product.image}
              alt={product.title}
              className="h-24 w-24 object-contain flex-shrink-0"
            />
            <h3 className="font-semibold w-1/4">{product.title}</h3>
            <span className="text-gray-600 w-1/6">{product.category}</span>
            <span className="w-1/6">${product.price}</span>
            <p className="text-gray-600 flex-1">
              {product.description.slice(0, 60)}
            </p>
          </Link>
        ))}
      </div>
    </div>
  );
}

export default ProductListPage;
