import axios from "axios";
const apiURL = "https://fakestoreapi.com/carts/";

import { useState, useEffect } from "react";

function Cart() {
  const [cart, setCart] = useState(null);

  useEffect(() => {
    axios.get(apiURL + "5").then((response) => {
      setCart(response.data);
    });
  }, []);
  return (
    <div>
      <div>
        {cart &&
          cart.products.map((p, index) => (
            <div key={index}>
              Product ID: {p.productId}, Qty: {p.quantity}
            </div>
          ))}
      </div>
    </div>
  );
}

export default Cart;
