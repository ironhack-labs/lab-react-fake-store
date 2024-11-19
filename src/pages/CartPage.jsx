import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

function CartPage({ products }) {
  const [cart, setCart] = useState({});
  const { productId } = useParams();

  useEffect(() => {
    async function fetchFakeCart() {
      try {
        const response = await fetch(
          `https://fakestoreapi.com/carts/${productId}`
        );
        const data = await response.json();
        setCart(data);
      } catch (error) {
        console.log(error);
      }
    }
    fetchFakeCart();
  });

  return (
    <div id="cart">
      {cart.products.map((product) => {
        return (
          <div>
            <p>
              {product.productId}: {product.quantity}
            </p>
          </div>
        );
      })}
    </div>
  );
}

export default CartPage;
