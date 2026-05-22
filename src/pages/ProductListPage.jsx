import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

function ProductListPage() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch("https://fakestoreapi.com/products")
      .then((response) => response.json())
      .then((data) => {
        setProducts(data);
      });
  }, []);

  return (
    <div className="ProductListPage">
      {products.map((product) => (
        <Link key={product.id} to={`/product/details/${product.id}`}>
          <div>
            <img src={product.image} alt={product.title} />
            <h3>{product.title}</h3>
            <p>{product.price} €</p>
          </div>
        </Link>
      ))}
    </div>
  );
}

export default ProductListPage;