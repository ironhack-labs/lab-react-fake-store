import axios from "axios";
import { useState, useEffect } from "react";

export default function CartPage() {
  const [cart, setCart] = useState({});

  useEffect(() => {
    const getCart = async () => {
      try {
        const random = Math.floor(Math.random() * 7 + 1);
        const response = await axios.get(
          `https://fakestoreapi.com/carts/${random}`,
        );

        setCart(response.data);
      } catch (error) {
        console.log(error);
      }
    };

    getCart();
  }, []);
  return (
    <div>
      {Object.keys(cart).length ? (
        <div>
          <h2>{cart.date}</h2>
          {cart.products.map((product) => (
            <div key={product.productId}>
              <h3>{product.quantity} </h3>
            </div>
          ))}
        </div>
      ) : (
        <span>loading</span>
      )}
    </div>
  );
}
