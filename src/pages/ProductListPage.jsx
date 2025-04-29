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
    <div className="ProductListPage container">
      {products.map((product) => {
        return (
          <Link key={product.id} to={`/product/details/${product.id}`}>
            <div className="card">
              <img
                src={product.image}
                className="image-product"
                alt={product.name}
              />

              <h3 style={{ fontWeight: "bold" }}>{product.title}</h3>
              <h5>{product.category}</h5>
              <h5>{product.price}</h5>
              <p class="description">{product.description}</p>
            </div>
          </Link>
        );
      })}
    </div>
  );
}

export default ProductListPage;
