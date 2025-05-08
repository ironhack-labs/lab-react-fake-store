import React from "react";
import { useState } from "react";

function Cart() {
  const [cartContent, setCartContent] = useState(null);
  fetch("https://fakestoreapi.com/carts/6")
    .then((resp) => resp.json())
    .then((resp) => setCartContent(JSON.stringify(resp)));

  return <div className="cartContent">{cartContent}</div>;
}

export default Cart;
