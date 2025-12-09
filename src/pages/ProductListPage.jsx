import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

function ProductListPage() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    axios
      .get("https://fakestoreapi.com/products")
      .then((response) => {
        setProducts(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  return (
    <div className="ProductListPage">
      {products.map((product) => (
        <Link
          key={product.id}
          to={`/product/details/${product.id}`}
          className="card"
          style={{
            display: "block",
            color: "inherit",
            textDecoration: "none",
            marginBottom: "20px",
            border: "1px solid #ddd",
            padding: "15px",
            borderRadius: "10px",
            maxWidth: "280px"
          }}
        >
          <img
            src={product.image}
            alt={product.title}
            style={{
              width: "150px",
              height: "150px",
              objectFit: "contain",
              display: "block",
              margin: "0 auto 10px"
            }}
          />

          <h3>{product.title}</h3>
          <p>{product.price} €</p>
        </Link>
      ))}
    </div>
  );
}

export default ProductListPage;


