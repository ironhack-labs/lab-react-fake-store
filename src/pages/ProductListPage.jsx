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
      <h1>Products</h1>

      {products.map((product) => {
        return (
          <div key={product.id}>
            <Link to={`/product/details/${product.id}`}>
              <h3>{product.title}</h3>
            </Link>

            <img
              src={product.image}
              alt={product.title}
              width="150"
            />

            <p>${product.price}</p>
          </div>
        );
      })}
    </div>
  );
}

export default ProductListPage;