import axios from "axios";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

function ProductListPage() {
  // The state variable `products` is currently an empty array [],
  // but you should use it to store the response from the Fake Store API (the list of products).
  const [products, setProducts] = useState([]);

  // To fetch the list of products, set up an effect with the `useEffect` hook:
  useEffect(() => {
    axios
      .get("https://fakestoreapi.com/products")
      .then((response) => {
        console.log(response.data);
        setProducts(response.data);
      })
      .catch((error) => {
        console.error(error);
      });
  }, []);

  if (!products) {
    return <p>Getting products details...</p>;
  }

  return products.map((product) => {
    return (
      <Link
        to={`/product/details/${product.id}`}
        key={product.id}
        className="card flex-center"
      >
        <div>
          <img src={product.image} />
        </div>
        <div>
          <p>{product.title}</p>
        </div>
        <div>
          <p>{product.category}</p>
        </div>
        <div>
          <p>${product.price}</p>
        </div>
      </Link>
    );
  });
}

export default ProductListPage;
