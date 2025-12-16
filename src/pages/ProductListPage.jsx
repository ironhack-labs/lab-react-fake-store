import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

function ProductListPage() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch("https://fakestoreapi.com/products")
      .then((response) => response.json())
      .then((data) => {
        setProducts(data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  return (
    <div className="ProductListPage">
      <h1>Products</h1>

      {products.map((product) => (
        <Link
          key={product.id}
          to={`/product/details/${product.id}`}
          style={{ textDecoration: "none", color: "inherit" }}
        >
          <div>
            <h3>{product.title}</h3>
            <img src={product.image} alt={product.title} width="100" />
            <p>{product.price} €</p>
          </div>
        </Link>
      ))}
    </div>
  );
}

export default ProductListPage;
