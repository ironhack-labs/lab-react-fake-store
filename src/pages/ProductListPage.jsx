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
    <div className="ProductListPage">
      <h1 className="font-bold mb-4">Products</h1>
      <ul className="grid grid-cols-1 gap-4">
        {products.map((product) => (
          <li
            key={product.id}
            className="flex-row space-around p-4 border rounded gap-2"
          >
            <Link to={`/product/details/${product.id}`} className="w-full">
              <img
                src={product.image}
                className="w-full h-48 object-contain mb-4"
              />
              <p className="text-lg font-bold">{product.title}</p>
              <p className="text-lg">{product.category}</p>
              <p className="text-sm text-gray-700">${product.price}</p>
              <p className="text-sm text-gray-700">{product.description}</p>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default ProductListPage;
