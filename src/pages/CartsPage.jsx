import { useState, useEffect } from "react";
import axios from "axios";

function CartsPage() {
  const [carts, setCarts] = useState({});

  // To fetch the list of carts, set up an effect with the `useEffect` hook:
  const getCarts = () => {
    axios
      .get(`https://fakestoreapi.com/carts`)
      .then((response) => setCarts(response.data))
      .catch((error) => console.log(error));
  };

  useEffect(() => {
    getCarts();
  }, []);

  return (
    <div>
      <div className="container d-flex justify-content-between"></div>
      <h1 className="text-center">Carts</h1>
      {carts?.map((cart) => (
        <div key={cart.id}>
          <p>{cart.id}</p>
          <p>{cart.userId}</p>
          <p>{cart.date}</p>
        </div>
      ))}
    </div>
  );
}
export default CartsPage;
