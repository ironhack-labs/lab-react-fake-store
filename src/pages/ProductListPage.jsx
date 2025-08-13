import { data } from "autoprefixer";
import { useEffect, useState } from "react";

function ProductListPage() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch("https://fakestoreapi.com/products")
      .then((res) => res.json())
      .then((data) => setProducts(data))
      .catch((err) => console.error("Error:", err));
  }, []);

  return (
    <div className="ProductListPage spacing-lg">
      <h1 className="text-center text-uppercase spacing-md">Product List</h1>
      <div
        className="spacing-md"
        style={{ display: "flex", flexDirection: "column", gap: "16px" }}
      >
        {products.map((product) => (
          <div
            key={product.id}
            className="card"
            style={{ display: "flex", gap: "20px", alignItems: "center" }}
          >
            <img
              src={product.image}
              alt={product.title}
              style={{ width: "100px", height: "100px", objectFit: "contain" }}
            />
            <div style={{ textAlign: "left" }}>
              <h3>{product.title}</h3>
              <p>
                <strong>${product.price}</strong>
              </p>
              <p
                className="spacing-xs"
                style={{ fontStyle: "italic", color: "#666" }}
              >
                {product.category}
              </p>
              <p className="spacing-sm">
                {product.description.slice(0, 80)}...
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default ProductListPage;
