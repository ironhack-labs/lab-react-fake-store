import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

function ProductListPage() {
  // The state variable `products` is currently an empty array [],
  // but you should use it to store the response from the Fake Store API (the list of products).
  const [products, setProducts] = useState([]);

  // To fetch the list of products, set up an effect with the `useEffect` hook:
  useEffect(() => {
    fetch("https://fakestoreapi.com/products")
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        console.log(data);
        setProducts(data);
      })
      .catch((err) => console.log(err));
  }, []);

  return (
    <div className="ProductListPage">
      {products.map((product) => {
        return (
          <div className="card" key={product.id}>
            <img alt={product.title} src={product.image} />
            <div className="content">
              <Link to={`/product/details/${product.id}`} className="product-title">
              <p>{product.title}</p>
              </Link>
              <p>{product.category}</p>
              <p>{product.price}€</p>
              <p>{product.description}</p>
            </div>
          </div>
        );
      })}
    </div>
  );
}

export default ProductListPage;
