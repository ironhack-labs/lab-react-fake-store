import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

function ProductListPage() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    axios
      .get('https://fakestoreapi.com/products')
      .then((response) => {
        setProducts(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  return (
    <div className="ProductListPage container py-8">
      <h1 className="text-3xl font-bold mb-8">Products</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {products.map((product) => (
          <Link
            key={product.id}
            to={`/product/details/${product.id}`}
            className="card bg-white hover:shadow-lg transition-shadow"
          >
            <img
              src={product.image}
              alt={product.title}
              className="h-48 w-full object-contain mb-2"
            />
            <h2 className="text-lg font-bold mb-2 line-clamp-2">
              {product.title}
            </h2>
            <p className="text-blue-600 font-bold">${product.price}</p>
          </Link>
        ))}
      </div>
    </div>
  );
}

export default ProductListPage;
