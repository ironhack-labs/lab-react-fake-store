import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

function ProductListPage() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    // Iteration 1
    fetch("https://fakestoreapi.com/products")
      .then((response) => response.json())
      .then((data) => setProducts(data))
      .catch((error) => console.error("Error fetching products:", error));
  }, []);

  return (
    <div className="ProductListPage container p-4">
      <h1 className="text-2xl font-bold mb-4">Products</h1>
      <div className="product-list">
        {products.map((product) => (
          <div key={product.id} className="card">
            <Link to={`/product/details/${product.id}`}>
              <h2 className="text-xl font-semibold">{product.title}</h2>
              <img
                src={product.image}
                alt={product.title}
                className="w-full h-48 object-cover mt-2"
              />
              <p className="mt-2">${product.price}</p>
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
}

export default ProductListPage;
