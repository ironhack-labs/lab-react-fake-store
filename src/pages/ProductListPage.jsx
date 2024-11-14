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
      .catch((err) => {
        console.log(err);
      });
  }, []);

  return (
    <div className="ProductListPage">
      {products.map((OneProduct) => {
        return (
          <Link key={OneProduct.id} to={`/product/details/${OneProduct.id}`}>
            <div className="ProductCont">
              <h6>{OneProduct.title} </h6>

              <h1>{OneProduct.category}</h1>
              <h2>{OneProduct.price}UAH</h2>
              <h3>{OneProduct.description}</h3>
              <img src={OneProduct.image} className="Images" />
            </div>
          </Link>
        );
      })}
    </div>
  );
}

export default ProductListPage;
