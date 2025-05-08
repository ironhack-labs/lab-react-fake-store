import axios from "axios";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

function ProductListPage() {
  // The state variable `products` is currently an empty array [],
  // but you should use it to store the response from the Fake Store API (the list of products).
  const [products, setProducts] = useState([]);

  useEffect(() => {
    axios.get("https://fakestoreapi.com/products").then((response) => {
      setProducts(response.data);
    });
  }, []);

  return (
    <div className="ProductListPage">
      {products.map((product) => (
        <Link
          to={`/product/details/${product.id}`}
          key={product.id + product.price}
        >
          {JSON.stringify(product)}
        </Link>
      ))}
    </div>
  );
}

export default ProductListPage;
