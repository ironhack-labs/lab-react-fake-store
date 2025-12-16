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
      {products.map((product) => (
        <Link
          key={product.id}
          to={`/product/details/${product.id}`}
        >
          <div>
            <img
              src={product.image}
              alt={product.title}
            />

            <div>
              <h3>{product.title}</h3>
              <p>{product.category}</p>
              <p>{product.price} €</p>
              <p>{product.description}</p>
            </div>
          </div>
        </Link>
      ))}
    </div>
  );
}

export default ProductListPage;
