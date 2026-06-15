import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

function ProductListPage() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch("https://fakestoreapi.com/products")
      .then((res) => res.json())
      .then((data) => setProducts(data));
  }, []);

  return (
    <div className="ProductListPage container mx-auto px-4 py-8">
      <h1>Products</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {products.map((product) => (
          <Link key={product.id} to={`/product/details/${product.id}`}>
            <div className="card bg-white rounded-lg shadow p-4 h-full flex flex-col items-center hover:shadow-lg transition-shadow cursor-pointer">
              <img
                src={product.image}
                alt={product.title}
                className="h-40 object-contain mb-4"
              />
              <p className="font-semibold text-sm text-center mb-2 line-clamp-2">{product.title}</p>
              <p className="text-blue-700 font-bold mt-auto">${product.price}</p>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}

export default ProductListPage;