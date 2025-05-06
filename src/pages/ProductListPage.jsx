import { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

const apiURL = "https://fakestoreapi.com/products";

function ProductListPage() {
  // The state variable `products` is currently an empty array [],
  // but you should use it to store the response from the Fake Store API (the list of products).
  const [fetching, setFetching] = useState(true);
  const [products, setProducts] = useState([]);

  // To fetch the list of products, set up an effect with the `useEffect` hook:
  useEffect(() => {
    //console.log("useEffect - Initial render (Mounting)");
    axios.get(apiURL).then((response) => {
      setProducts(response.data);
      setFetching(false);
    });
  }, []);
  //[{"id":1,"title":"Fjallraven - Foldsack No. 1 Backpack, Fits 15 Laptops","price":109.95,
  //"description":"Your perfect pack for everyday use and walks in the forest. Stash your laptop (up to 15 inches) in the padded sleeve, your everyday",
  //"category":"men's clothing","image":"https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg","rating":{"rate":3.9,"count":120}},

  return (
    <div className="ProductListPage">
      {fetching && <p>Loading ...</p>}

      {products.map((element) => {
        return (
          <Link to={`./product/details/${element.id}`}>
            <div key={element._id} className="card">
              <img src={element.image} alt="productimage" />
              <h3>{element.title}</h3>
              <p>{element.category}</p>
              <p>${element.price}</p>
              <p>{element.description}</p>
            </div>
          </Link>
        );
      })}
    </div>
  );
}

export default ProductListPage;
