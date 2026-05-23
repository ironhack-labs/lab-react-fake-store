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
    <div>
      <h1>All Products</h1>

      {products.map((product) => {
        return (
          <Link key={product.id} to={`/product/details/${product.id}`}>
            <div>
              <h3>{product.title}</h3>
              <p>{product.price} €</p>
            </div>
          </Link>
        );
      })}
    </div>
  );
}

export default ProductListPage;