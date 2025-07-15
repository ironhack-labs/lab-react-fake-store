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
      .catch((err) => console.log(err));
  }, []);

  return (
    <div className="ProductListPage">
      <h1>Lista de Produtos</h1>
      <ul>
        {products.map((product) => (
          <li key={product.id}>
            <Link to={`/product/details/${product.id}`}>
              {product.title}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default ProductListPage;
