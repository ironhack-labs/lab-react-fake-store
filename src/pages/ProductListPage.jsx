import { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
function ProductListPage() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    axios
      .get("https://fakestoreapi.com/products")
      .then((response) => setProducts(response.data))
      .catch((error) => console.error(error));
  }, []);

  return (
    <div className="ProductListPage">
      {products.map((product) => (
        <div key={product.id}>
          <Link to={`/product/details/${product.id}`}>
            <h3>{product.title}</h3>
          </Link>
        </div>
      ))}
    </div>
  );
}

export default ProductListPage;
