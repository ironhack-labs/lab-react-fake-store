import axios from "axios";
import { useEffect, useState } from "react";

function Cart() {
  const [cartItems, setCartItems] = useState([]);
  const handleCart = async () => {
    const cart = await axios.get("https://fakestoreapi.com/carts/5");
    const products = await axios.get("https://fakestoreapi.com/products");
    const newCart = cart.data.products.map((cartItem) => {
      const product = products.data.find((p) => p.id === cartItem.productId);
      return {
        ...product,
        quantity: cartItem.quantity,
      };
    });
    setCartItems(newCart);
  };

  useEffect(() => {
    handleCart();
  }, []);

  console.log(cartItems);

  return <div>Cart</div>;
}

export default Cart;
