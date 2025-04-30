import React from 'react'
import { useState, useEffect } from "react";
import axios from "axios";

const CartPage = () => {
    const [cart, setCart] = useState([]);

    useEffect(() => {
        axios.get("https://fakestoreapi.com/carts/5")
        .then(({data}) => {
          // Handle success
          console.log(data);
          setCart(data)
        })
        .catch((error) => {
          // Handle error
          console.log(error);
        })
      }, [] );



  return (
    <>
        <div></div>
        {/* <p>{cart.date}</p>
        <p>{cart.id}</p>
        {cart.products.map(prod => {(
            <div>
                <p>{prod.productId}</p>
                <p>{prod.quantity}</p>
            </div>
        )})}
        <p>{cart.userId}</p> */}
    </>
  )
}

export default CartPage
