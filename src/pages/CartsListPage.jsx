import { useState, useEffect } from "react";
import axios from "axios";
import CartCard from "../components/CartCard";

function CartsListPage() {
  const [carts, setCarts] = useState([]);

  // To fetch the list of carts, set up an effect with the `useEffect` hook:
  useEffect(() => {
    const getCarts = () => {
      axios
        .get(`https://fakestoreapi.com/carts`)
        .then((response) => setCarts(response.data))
        .catch((error) => console.log(error));
    };

    getCarts();
  }, []);

  return (
    <div className="container">
      <h1 className="text-center">Carts</h1>
      {carts.map((cart) => (
        <CartCard key={cart.id} cart={cart} />
      ))}
    </div>
  );
}

export default CartsListPage;
