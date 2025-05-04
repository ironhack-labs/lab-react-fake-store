import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

function ProductListPage() {
  // The state variable `products` is currently an empty array [],
  // but you should use it to store the response from the Fake Store API (the list of products).
  const [products, setProducts] = useState([]);

  // To fetch the list of products, set up an effect with the `useEffect` hook:
  useEffect(() => {
    fetch("https://fakestoreapi.com/products")
      .then((response) => response.json())
      .then((data) => {
        // Update the state variable `products` with the response from the API
        setProducts(data);
      });
  }, []);
  return (
    <div className="ProductListPage" style={{ backgroundColor: "gray" }}>
      {products.map((product) => {
        return (
          <Link to={`/product/details/${product.id}`}>
            <div
              key={product.id}
              className="Product"
              style={{
                display: "flex",
                flexDirection: "flex-row",
                justifyContent: "space-evenly",
                alignItems: "center",
                backgroundColor: "#fff",
                border: "1px solid black",
                shadow: "2px 2px 2px 2px #888888",
                minHeight: "250px",
              }}
            >
              <img
                src={product.image}
                alt={product.title}
                style={{ maxWidth: "200px", maxHeight: "200px" }}
              />
              <h3
                style={{
                  maxWidth: "200px",
                  flexWrap: "wrap",
                  fontWeight: "bolder",
                  textAlign: "center",
                }}
              >
                {product.title}
              </h3>
              <h3 style={{ maxWidth: "50px", flexWrap: "wrap" }}>
                {product.category}
              </h3>
              <p>${product.price}</p>
              <p style={{ maxWidth: "200px" }}>{product.description}</p>
            </div>
          </Link>
        );
      })}
    </div>
  );
}

export default ProductListPage;
