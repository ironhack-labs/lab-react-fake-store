import axios from "axios";
import { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";

function ProductListPage() {
  // The state variable `products` is currently an empty array [],
  // but you should use it to store the response from the Fake Store API (the list of products).
  const [products, setProducts] = useState([]);

  // To fetch the list of products, set up an effect with the `useEffect` hook:
  useEffect(() => {
    axios
      .get("https://fakestoreapi.com/products")
      .then((response) => {
        setProducts(response.data);
      })
      .catch((e) => {
        console.log("Error");
      });
  }, []);

  console.log(products);
  return (
    <div className="ProductListPage">
      {products.map((item) => {
        return (
          <NavLink to={`/product/details/${item.id}`} className="card">
            <img className="img" src={item.image} />
            <p>{item.title}</p>
            <p>{item.category}</p>
            <p>{item.price}</p>
            <p className="description">{item.description.slice(0, 50)}</p>
          </NavLink>
        );
      })}
    </div>
  );
}

export default ProductListPage;
