import { useState, useEffect } from "react";
import axios from "axios";

function ProductListPage() {
  // The state variable `products` is currently an empty array [],
  // but you should use it to store the response from the Fake Store API (the list of products).
  const [products, setProducts] = useState([]);

  // To fetch the list of products, set up an effect with the `useEffect` hook:
  const [fetching, setFetching] = useState(true);

  useEffect(() => {
    console.log("useEffect - Initial render (Mounting)");

    axios
      .get("https://fakestoreapi.com/products")
      .then((response) => {
        // Handle success
        console.log(response);
        setProducts(response.data);
        setFetching(false);
      })
      .catch((error) => {
        // Handle error
        console.log(error);
      });
  }, []);

  return (
    <div className="ProductListPage">
      <h1>List of Products</h1>
      {fetching && <p>Loading ...</p>}

      {products.map((prod) => {
        return (
          <div key={prod.id} className="card">
            <img src={prod.image} alt="product" />
            <div className="title">
              <h3>{prod.title}</h3>
            </div>
            <div className="category">
              <h3>{prod.category}</h3>
            </div>
            <div className="price">
              <h3>{prod.price}</h3>
            </div>
            <div className="description">
              <p>{prod.description}</p>
            </div>

            <p>
              Rating: {prod.rating.rate} (Opinions: {prod.rating.count})}
            </p>
          </div>
        );
      })}
    </div>
  );
}

export default ProductListPage;
