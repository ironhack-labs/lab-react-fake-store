import React from "react";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
function Cart() {
  const [cart, setCart] = useState({});
  const params = useParams();

  useEffect(() => {
    fetch(`https://fakestoreapi.com/carts/${params.id}`)
      .then((response) => {
        return response.json();
      })
      .then((response) => {
        console.log(response);
        setCart(response);
      })
      .catch((e) => {
        console.log(e);
      });
  }, [params.id]);

  return (
    <div key={cart.id}>
      <p>{cart.userId}</p>
      <p>{cart.date}</p>
      {cart.products && cart.products.map((e,index) => {
        return (
          <div key={index}>
            <p>{e.productId}</p>
            <p>{e.quantity}</p>
          </div>
        );
      })}
    </div>
  );
}

export default Cart;
