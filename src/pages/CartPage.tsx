import { useState, useEffect } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import React from "react";

const CartPage = () => {
  const { id } = useParams();
  const [items, setItems] = useState([]);

  useEffect(() => {
    axios
      .get(`https://fakestoreapi.com/carts/${id}`)
      .then((res) => {
        setItems(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, [id]);

  return (
    <div>
      <h1>Cart</h1>
      <p>Items in cart: {items.length}</p>
    </div>
  );
};

export default CartPage;
