import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

function ProductListPage() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch("https://fakestoreapi.com/products")
      .then((res) => res.json())
      .then((data) => {
        setProducts(data);
      })
      .catch((error) => {
        console.error("error fetching", error);
      });
  }, []);

  return (
    <div className="ProductListPage container">
      <h1>Products</h1>
      {products.map((product) => (
  <li className="card" key={product.id}>
    <Link to={`/products/details/${product.id}`} style={{ textDecoration: 'none', color: 'inherit' }}>
      <div style={{ display: "flex", gap: "16px" }}>
        <img src={product.image} alt={product.title} style={{ width: "100px" }} />
        <div>
          <h3>{product.title}</h3>
          <p><strong>{product.category}</strong></p>
          <p>{product.price}€</p>
          <p>{product.description}</p>
        </div>
      </div>
    </Link>
  </li>
))}
    </div>
  );
}
 

export default ProductListPage;
