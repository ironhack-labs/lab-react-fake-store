import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

function ProductListPage() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch('https://fakestoreapi.com/products')
      .then(response => response.json())
      .then(data => setProducts(data));
  }, []);

  return (
    <div className="ProductListPage">
      {products.map((product) => (
        <Link to={`/product/details/${product.id}`} key={product.id}>
          <div>
            <h3>{product.title}</h3>
            <p>{product.price}</p>
            <img src={product.image} alt={product.title} />
          </div>
        </Link>
      ))}
    </div>
  );
}

export default ProductListPage;