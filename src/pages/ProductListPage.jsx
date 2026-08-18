import { useState, useEffect } from "react";
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
      {products.map((product) => (
        <div key={product.id}>
          <h2>{product.title}</h2>
          <p>€{product.price}</p>
          <img src={product.image} alt={product.title} width="150" />
        </div>
      ))}
    </div>
  );
}

export default ProductListPage;