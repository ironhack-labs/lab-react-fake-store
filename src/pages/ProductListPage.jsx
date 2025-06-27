import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

function ProductListPage() {
  const [products, setProducts] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    fetch("https://fakestoreapi.com/products")
      .then((res) => res.json())
      .then((data) => {
        setProducts(data);
        setIsLoading(false);
      })
      .catch((error) => {
        console.error("Error fetching products:", error);
        setIsLoading(false);
      });
  }, []);

  if (isLoading) return <p>Loading products...</p>;

  return (
    <div style={{ padding: "20px", maxWidth: "1000px", margin: "0 auto" }}>
      {products.map((product) => (
        <Link
          to={`/product/details/${product.id}`}
          key={product.id}
          style={{
            display: "flex",
            alignItems: "center",
            gap: "20px",
            backgroundColor: "#f9f9f9",
            marginBottom: "20px",
            padding: "15px",
            borderRadius: "8px",
            boxShadow: "0 2px 4px rgba(0,0,0,0.1)",
            textDecoration: "none",
            color: "inherit",
          }}
        >
          <img
            src={product.image}
            alt={product.title}
            style={{
              width: "120px",
              height: "120px",
              objectFit: "contain",
              borderRadius: "8px",
            }}
          />

          <div style={{ flex: 1 }}>
            <h3 style={{ margin: 0 }}>{product.title}</h3>
            <p style={{ color: "#666", margin: "5px 0" }}>{product.category}</p>
          </div>

          <div style={{ textAlign: "right" }}>
            <p style={{ fontWeight: "bold", margin: 0 }}>${product.price}</p>
            <p
              style={{
                color: "#888",
                margin: 0,
                maxWidth: "200px",
                overflow: "hidden",
                textOverflow: "ellipsis",
                whiteSpace: "nowrap",
              }}
            >
              {product.description}
            </p>
          </div>
        </Link>
      ))}
    </div>
  );
}

export default ProductListPage;
