import { useState, useEffect } from "react";
const cartList = "https://fakestoreapi.com/carts/";
import SingleCart from "../components/SingleCart";

function CartPage() {
  const [cartProducts, setCartProducts] = useState([]);

  async function getList() {
    try {
      const response = await fetch(cartList);
      const jsonResponse = await response.json();
      setCartProducts(jsonResponse);
    } catch (error) {
      console.log("The error is: ", error);
    }
  }

  useEffect(() => {
    getList();
  }, []);

  return (
    <div>
      {cartProducts.map((cartProduct) => (
        <div key={cartProduct.id}>
          <SingleCart cartId={cartProduct.id} />
        </div>
      ))}
    </div>
  );
}

export default CartPage;

