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
        <div className="ProductCard" key={product.id}>
          <Link to={`/product/details/${product.id}`}>
            <button>View Details</button>
          </Link>
          <img
            className="w-40 h-40 object-cover"
            src={product.image}
            alt={product.title}
          />
          <h2>{product.title}</h2>
          <p>Price: ${product.price}</p>
        </div>
      ))}
    </div>
  );
}

export default ProductListPage;
