import React, { useState, useEffect } from "react";
import axios from "axios";

const apiURL = "https://fakestoreapi.com/products";
function Homepage() {
  const [fetching, setFetching] = useState(true);
  const [products, setProducts] = useState([]);

  useEffect(() => {
    console.log("useEffect - Initial render (Mounting)");
    axios.get(apiURL).then((response) => {
      setApartments(response.data);
      setFetching(false);
    });
  }, []);

  return (
    <div>
      <h3>List of the Products</h3>
      {fetching && <p> Loading...</p>}

      {products.map((product) => {
        return (
          <div key={product._id} className="cards">
            <img src="" alt="" />
          </div>
        );
      })}
    </div>
  );
  console.log(h3);
}
console.log(Homepage());

export default Homepage;
