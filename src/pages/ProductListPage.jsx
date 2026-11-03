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
    <div>
      <h1>Products List</h1>

      {products.map((product) => (
        <div key={product.id}>

          <Link to={`/product/details/${product.id}`}>
            <h2>{product.title}</h2>
          </Link>

          <img
            src={product.image}
            alt={product.title}
            width="100"
          />

          <p>{product.price} €</p>
          <p>{product.description}</p>

        </div>
      ))}
    </div>
  );
}

export default ProductListPage;