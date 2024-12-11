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
      <ul className="grid-cols-1 gap-4">
  {products.map((product) => (
    <li
      key={product.id}
      className="border p-4 rounded-md shadow-sm hover:shadow-lg transition-all"
    >
      <Link to={`/product/details/${product.id}`} className="block">
        <div className="flex flex-row space-y-5 d-flex align-items-baseline">
          <img
          src={product.image}
          alt={product.title}
          className="w-48 h-48 object-contain mb-4"
        />
          <h2 className="text-lg font-bold">{product.title}</h2>
          <p className="text-sm text-gray-600">{product.category}</p>
          <p className="text-sm text-gray-700">${product.price}</p>
          <p className="text-sm text-gray-500 truncate">
            {product.description}
          </p>
        </div>
      </Link>
    </li>
  ))}
</ul>

    </div>
  );
}

export default ProductListPage;
