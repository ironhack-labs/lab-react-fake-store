import { useEffect, useState } from "react";

const DEMO_CART_ID = 1; // static ID for demo

function CartPage() {
  const [items, setItems] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchCart() {
      try {
        // 1) Get cart by ID
        const res = await fetch(`https://fakestoreapi.com/carts/${DEMO_CART_ID}`);
        const cart = await res.json();

        // 2) For each product in the cart, fetch details
        const productRequests = cart.products.map(async ({ productId, quantity }) => {
          const prodRes = await fetch(`https://fakestoreapi.com/products/${productId}`);
          const prod = await prodRes.json();
          return {
            ...prod,             // includes id, title, image, price, etc.
            quantity,
            subtotal: prod.price * quantity
          };
        });

        const enrichedItems = await Promise.all(productRequests);
        setItems(enrichedItems);
      } catch (err) {
        console.error("Error fetching cart:", err);
      } finally {
        setLoading(false);
      }
    }

    fetchCart();
  }, []);

  if (loading) return <p>Loading cart...</p>;

  const total = items.reduce((sum, item) => sum + item.subtotal, 0);

  return (
    <div className="CartPage">
      <h1>Your Cart</h1>
      {items.length === 0 ? (
        <p>Cart is empty</p>
      ) : (
        <ul>
          {items.map((item) => (
            <li key={item.id} style={{ marginBottom: "20px" }}>
              <img src={item.image} alt={item.title} width="80" />
              <div>
                <h3>{item.title}</h3>
                <p>Price: ${item.price}</p>
                <p>Quantity: {item.quantity}</p>
                <p><strong>Subtotal: ${item.subtotal.toFixed(2)}</strong></p>
              </div>
            </li>
          ))}
        </ul>
      )}
      <hr />
      <h2>Total: ${total.toFixed(2)}</h2>
    </div>
  );
}

export default CartPage;
