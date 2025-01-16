import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

function ProductListPage() {
  // The state variable `products` is currently an empty array [],
  // but you should use it to store the response from the Fake Store API (the list of products).
  const [products, setProducts] = useState([]);

  // To fetch the list of products, set up an effect with the `useEffect` hook:

  useEffect(() => {
    fetch("https://fakestoreapi.com/products")
      .then((response) => response.json())
      .then((data) => setProducts(data))
      .catch((err) => console.log(err));
  }, []);

  if (products.length === 0) {
    return <p>Loading...</p>;
  }

  return (
    <div>
      {products.map((product) => {
        return (
          <div key={product.id}>
            <Link to={`/product/details/${product.id}`}>
              <img src={product.image} width={"100px"} height={"100px"} />
            </Link>
            <p>{product.title}</p>
            <p>{product.category}</p>
            <p>${product.price}</p>
            <p>{product.description}</p>
          </div>
        );
      })}
    </div>
  );
}

export default ProductListPage;
