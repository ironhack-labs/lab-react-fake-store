import { useState, useEffect } from "react";
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
    <div className="ProductListPage">
      {products.map((product) => {
        return (
          <Link
            key={product.id}
            to={`/product/details/${product.id}`}
            className="product-card"
          >
            <img src={product.image} alt={product.title} />
            <h2>{product.title}</h2>
            <p>{product.category}</p>
            <p>${product.price}</p>
            <p>{product.description}</p>
          </Link>
        );
      })}
    </div>
  );
}

export default ProductListPage;