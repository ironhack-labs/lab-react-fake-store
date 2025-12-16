import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
function ProductListPage() {
  // The state variable `products` is currently an empty array [],
  // but you should use it to store the response from the Fake Store API (the list of products).
  const [products, setProducts] = useState([]);

  // To fetch the list of products, set up an effect with the `useEffect` hook:
  useEffect(() => {
    fetch("https://fakestoreapi.com/products")
      .then((response) => response.json())
      .then((data) => setProducts(data));
  }, []);

  return (
    <div className="ProductListPage">
      {products.map((product) => {
        return (
          <>
            <Link to={`/product/details/${product.id}`}>
              <div className="card" key={product.id}>
                <img src={product.image} />
                <p>
                  <strong>{product.title}</strong>
                </p>
                <p>{product.category}</p>
                <p>{product.description}</p>
                <p>${product.price}</p>
              </div>
            </Link>
          </>
        );
      })}
    </div>
  );
}

export default ProductListPage;
