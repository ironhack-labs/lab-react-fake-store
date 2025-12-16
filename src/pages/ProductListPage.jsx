import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

function ProductListPage() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch("https://fakestoreapi.com/products")
      .then((res) => res.json())
      .then((data) => setProducts(data))
      .catch((err) => console.log("Error fetching products:", err));
  }, []);

  return (
    <div>
      <h1>All Products</h1>

      {products.length === 0 ? (
        <p>Loading products...</p>
      ) : (
        products.map((product) => (
          <div
            key={product.id}
            style={{
              border: "1px solid #ccc",
              padding: "12px",
              margin: "12px",
            }}
          >
            {/* CLICKABLE LINK */}
            <Link to={`/product/details/${product.id}`}>
              <h3>{product.title}</h3>
              <img
                src={product.image}
                alt={product.title}
                style={{
                  width: "120px",
                  height: "120px",
                  objectFit: "contain",
                }}
              />
            </Link>
          </div>
        ))
      )}
    </div>
  );
}

export default ProductListPage;
