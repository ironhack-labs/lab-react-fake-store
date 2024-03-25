import { useEffect, useState } from "react";
import axios from "axios";

function CartPage() {
  const [cart, setCart] = useState(null);
  async function fetchCart() {
    try {
      const res = await axios.get("https://fakestoreapi.com/carts/1");
      const arr = [];
      for (let elem of res.data.products) {
        arr.push(
          axios.get(`https://fakestoreapi.com/products/${elem.productId}`)
        );
      }
      const data = await Promise.all(arr);
      const productDetails = data.map((elem) => elem.data);
      setCart(productDetails);
    } catch (error) {
      console.log(error);
    }
  }

  useEffect(() => {
    fetchCart();
  }, []);

  if (!cart) {
    return <p>nothing in the cart</p>;
  }

  return (
    <div>
      <p>CartPage</p>
      {cart.map((elem) => {
        return (
          <li key={elem.id}>
            <img src={elem.image} alt="" />
            <p>{elem.title}</p>
            <p>{elem.price}</p>
          </li>
        );
      })}
    </div>
  );
}

export default CartPage;
