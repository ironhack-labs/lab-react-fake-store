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
        console.log(response);
        return response.json();
      })

      .then((data) => {
        console.log(data);
        setProducts(data);
      })
      .catch((error) => console.log(error));
  }, []);

  return (
    <div className="ProductListPage">
      {products.map((eachProduct) => {
        return (
          <Link to={`/product/details/${eachProduct.id}`}>
            <div className="prod" id={eachProduct.id}>
              <img src={eachProduct.image} alt="" />
              <h1>{eachProduct.title}</h1>
              <h2>{eachProduct.category}</h2>
              <p> {eachProduct.price} </p>
              <p> {eachProduct.description} </p>
            </div>
          </Link>
        );
      })}
    </div>
  );
}

export default ProductListPage;
