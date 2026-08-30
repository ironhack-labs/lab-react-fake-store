import { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

function ProductListPage() {
  // The state variable `products` is currently an empty array [],
  // but you should use it to store the response from the Fake Store API (the list of products).
  const [products, setProducts] = useState([]);

  // To fetch the list of products, set up an effect with the `useEffect` hook:

  useEffect(() => {
    async function fetchProducts() {
      try {
        const response = await axios.get("https://fakestoreapi.com/products");
        setProducts(response.data);
      } catch (error) {
        console.log(error);
      }
    }

    fetchProducts();
  }, []);

  return (
    <div
      className="ProductListPage"
      style={{
        display: "flex",
        flexDirection: "column",
        gap: "8px",
        padding: "20px",
      }}
    >
      {/* Render list of products here */}
      {products.map((product) => (
        
        <Link 
          to={`/product/details/${product.id}`} 
          key={product.id} 
          style={{ textDecoration: "none", color: "inherit" }}>
          <div
          key={product.id}
          className="product-card"
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            padding: "15px 30px",
            backgroundColor: "White",
            border: "1px solid #e0e0e0",
            marginBottom: "10px",
          }}
        >
          <img
            src={product.image}
            alt={product.title}
            width="80"
            height="80"
            style={{ objectFit: "contain" }}
          />

          <h3 style={{ width: "200px" }}>{product.title}</h3>

          <p>{product.category}</p>

          <p>${product.price}</p>

          {/* Pure CSS Truncation */}
          <p
            style={{
              maxWidth: "200px",
              maxHeight: "3em",
              overflow: "hidden",
              textAlign: "center",
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
