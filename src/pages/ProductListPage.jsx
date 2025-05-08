import axios from "axios";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

function ProductListPage() {
  // The state variable `products` is currently an empty array [],
  // but you should use it to store the response from the Fake Store API (the list of products).
  const [products, setProducts] = useState([]);
  const url = "https://fakestoreapi.com/products";

  useEffect(() => {
    axios.get(url).then((res) => setProducts(res.data));
  }, []);

  return (
    <div className="ProductListPage">
      {" "}
      {products &&
        products.map((product) => (
          <Link key={product.id} to={`/product/details/${product.id}`}>
            <div className="productItem">
              <img src={product.image} alt={product.name} width={100} />
              <h6>{product.title}</h6>
              <p>{product.category}</p>
              <p>{product.price}</p>
              <p>{product.description}</p>
            </div>
          </Link>
        ))}
    </div>
  );
}

export default ProductListPage;
