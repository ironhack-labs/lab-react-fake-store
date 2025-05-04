import { useEffect, useState } from "react";
import "./CartPage.css";

function CartPage() {
  const [cartContent, setCartContent] = useState([]);

  async function getCartContent() {
    const response1 = await fetch("https://fakestoreapi.com/carts/5");
    const response1Json = await response1.json();
    console.log(response1Json);

    const cartWithAllInfo = await Promise.all(
      response1Json.products.map(async (product) => {
        const response2 = await fetch(
          `https://fakestoreapi.com/products/${product.productId}`
        );
        const response2Json = await response2.json();
        const itemWithQuantity = {
          quantity: product.quantity,
          ...response2Json,
        };
        return itemWithQuantity;
      })
    );

    setCartContent(cartWithAllInfo);
  }

  useEffect(() => {
    getCartContent();
  }, []);

  return (
    <ul className="cart-content">
      {cartContent.map((cartItem, index) => {
        return (
          <li className="cart-item" key={index}>
            <img src={cartItem.image}/>
            <h2>{cartItem.title}</h2>
            <p>{cartItem.quantity}</p>
            <p>${cartItem.price * cartItem.quantity}</p>
          </li>
        );
      })}
    </ul>
  );
}

export default CartPage;
