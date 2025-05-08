import axios from "axios";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";

function ProductListPage() {
  // The state variable `products` is currently an empty array [],
  // but you should use it to store the response from the Fake Store API (the list of products).
  const [products, setProducts] = useState(null);

  // To fetch the list of products, set up an effect with the `useEffect` hook:

  useEffect(() => {
    axios
      .get(`https://fakestoreapi.com/products`)
      .then((response) => {
        setProducts(response.data);
      })
      .catch((e) => {
        console.log(e);
      });
  }, []);

  const returnProducts = () => {
    return products.map((el, index) => {
      return (
        <>
          <Link to={`/product/details/${el.id}`}>
            <div className="card" key={index}>
              <img src={el.image} />
              <h2>{el.title}</h2>
              <h2>{el.category}</h2>
              <h2>${el.price}</h2>
              <h2>{el.description}</h2>
            </div>
          </Link>
        </>
      );
    });
  };

  return <div className="ProductListPage">{products === null ? <p>Loading</p> : returnProducts()}</div>;
}

export default ProductListPage;
