import { useState, useEffect } from "react";
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
      {products.map((product) => {
        return (
          <Link
            key={product.id}
            to={`/product/details/${product.id}`}
          >
            <div>
              <h2>{product.title}</h2>

              <img
                src={product.image}
                alt={product.title}
                width="150"
              />

              <p>{product.price} €</p>
            </div>
          </Link>
        );
      })}
    </div>
  );
}

export default ProductListPage;