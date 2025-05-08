import { useState, useEffect } from "react";

function CartPage() {
  const [cart, setCart] = useState([]);
  const cartId = 1;

  if (!cartId) {
    return <p>Error: No Cart ID provided.</p>;
  }

  useEffect(() => {
    if (!cartId) {
      console.error("Cart ID is missing");
      return;
    }

    fetch(`https://fakestoreapi.com/carts/${cartId}`)
      .then((res) => res.json())
      .then((cartData) => {
        console.log("Fetched cart data:", cartData);

        if (!cartData || !cartData.products || !Array.isArray(cartData.products)) {
          console.error("Invalid cart data structure", cartData);
          return;
        }

        const productPromises = cartData.products.map((cartItem) => {
          return fetch(`https://fakestoreapi.com/products/${cartItem.productId}`)
            .then((res) => res.json())
            .then((productData) => {
              return {
                ...productData,
                quantity: cartItem.quantity, 
              };
            })
            .catch((error) => {
              console.error("Error fetching product data:", error);
              return null;
            });
        });

        Promise.all(productPromises)
          .then((productsWithDetails) => {
            const validProducts = productsWithDetails.filter((item) => item !== null);

            setCart(validProducts);
          })
          .catch((error) => console.error("Error processing product details:", error));
      })
      .catch((error) => {
        console.error("Error fetching cart data:", error);
      });
  }, [cartId]);

  if (cart.length === 0) return <p>Your cart is empty or loading...</p>;

  return (
    <div className="CartPage">
      <h1>Your Cart</h1>
      <ul>
        {cart.map((item, index) => (
          <li key={index}>
            <h2>{item.title}</h2>
            <img src={item.image} alt={item.title} width={100} />
            <p>Price: ${item.price}</p>
            <p>Quantity: {item.quantity}</p>
            <p>Total: ${(item.price * item.quantity).toFixed(2)}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default CartPage;
