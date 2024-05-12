import React, { useEffect } from "react";
import CartItem from "../components/CartItem";

const CartPage = () => {
  const cartId = 1;

  const [items, setItems] = React.useState([]);

  useEffect(() => {
    fetch(`https://fakestoreapi.com/carts/${cartId}`)
      .then((res) => res.json())
      .then((json) => {
        const cartProducts = json.products;
        console.log(cartProducts);
        setItems(cartProducts);
      });
  }, []);

  return (
    <div>
      {items.map((item, i) => (
        <div key={`cart:${cartId}:${i}`}>
            <CartItem item={item} />

        </div>
      ))}
    </div>
  );
};

export default CartPage;


 