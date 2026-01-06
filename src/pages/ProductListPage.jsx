import { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

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
      <h1>Products</h1>

      {products.map((product) => (
        <Link key={product.id} to={`/product/details/${product.id}`}>
          <div className="product-card">
            <h3>{product.title}</h3>
            <p>{product.price} €</p>
          </div>
        </Link>
      ))}
    </div>
  );
}

export default ProductListPage;
