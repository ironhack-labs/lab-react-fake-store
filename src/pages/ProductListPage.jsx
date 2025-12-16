import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

function ProductListPage() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch("https://fakestoreapi.com/products")
      .then((res) => res.json())
      .then((data) => setProducts(data))
      .catch((err) => console.log(err));
  }, []);

  return (
    <div className="card">
      {products.map((product) => (
        <Link key={product.id} to={`/product/details/${product.id}`}>
          <div>
            <h3>{product.title}</h3>
            <p>{product.price} €</p>
            <img src={product.image} alt={product.title} width="100" />
          </div>
        </Link>
      ))}
    </div>
  );
}

export default ProductListPage;
