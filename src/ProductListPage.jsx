import { useEffect, useState } from "react";
import { Link } from "react-router-dom"; // ✅ مهم

function ProductListPage() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch("https://fakestoreapi.com/products")
      .then((res) => res.json())
      .then((data) => setProducts(data))
      .catch((err) => console.error(err));
  }, []);

  return (
    <div>
      <h1>Product List</h1>
      <ul style={{ listStyle: "none", padding: 0 }}>
        {products.map((product) => (
          <li key={product.id} style={{ marginBottom: "20px" }}>
            <Link to={`/product/details/${product.id}`} style={{ textDecoration: "none", color: "black" }}>
              <p>{product.title}</p>
              <img src={product.image} alt={product.title} width={100} />
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default ProductListPage;
