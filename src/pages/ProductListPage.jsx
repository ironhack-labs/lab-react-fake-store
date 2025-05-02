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
      <ul className="space-y-4">
  {products.map((product) => (
    <li
      key={product.id}
      className="flex items-center gap-4 p-4 border rounded-md shadow-sm hover:shadow-lg transition-all"
    >
      <img
        src={product.image}
        alt={product.title}
        className="w-36 h-36 object-contain flex-shrink-0"
      />
      <div className="flex items-center gap-8 w-full overflow-hidden">
        <Link to={`/product/details/${product.id}`} className="flex-shrink-0">
          <h2 className="text-lg font-bold">{product.title}</h2>
        </Link>
        <p className="text-sm text-gray-600 flex-shrink-0">{product.category}</p>
        <p className="text-sm text-gray-700 font-bold flex-shrink-0">
          ${product.price}
        </p>
        <p className="text-sm text-gray-500 truncate">{product.description}</p>
      </div>
    </li>
  ))}
</ul>


    </div>
  );
}

export default ProductListPage;
