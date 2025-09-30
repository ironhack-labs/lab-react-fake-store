import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";


export default function CartPage() {
  const [items, setItems] = useState([]); 
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  const { cartId } = useParams();
  

  useEffect(() => {
    let cancelled = false;
    async function fetchCart() {
      try {
        setLoading(true);
        setError("");

        
        const { data: cart } = await axios.get(
          `https://fakestoreapi.com/carts/${cartId}`
        );
        const entries = cart.products || []; 

        const detailPromises = entries.map(async (p) => {
          const { data: product } = await axios.get(
            `https://fakestoreapi.com/products/${p.productId}`
          );
          return { product, quantity: p.quantity };
        });

        const results = await Promise.all(detailPromises);
        if (!cancelled) setItems(results);
      } catch (e) {
        if (!cancelled) setError("Failed to load cart.");
      } finally {
        if (!cancelled) setLoading(false);
      }
    }

    fetchCart();
    return () => {
      cancelled = true;
    };
  }, [cartId]);

  const total = items.reduce(
    (sum, it) => sum + it.product.price * it.quantity,
    0
  );

  if (loading) return <div>Loading cart…</div>;
  if (error) return <div>{error}</div>;
  if (!items.length) return <div>Your cart is empty.</div>;

  return (
    <div style={{ padding: 16 }}>
      <h1>Cart</h1>
      <ul style={{ listStyle: "none", padding: 0 }}>
        {items.map(({ product, quantity }) => (
          <li
            key={product.id}
            style={{
              display: "grid",
              gridTemplateColumns: "64px 1fr auto auto",
              gap: 12,
              alignItems: "center",
              marginBottom: 12,
              borderBottom: "1px solid #eee",
              paddingBottom: 12,
            }}
          >
            <img src={product.image} alt={product.title} width={64} />
            <div>
              <div style={{ fontWeight: 600 }}>{product.title}</div>
              <div style={{ color: "#666", fontSize: 14 }}>
                ${product.price.toFixed(2)}
              </div>
            </div>
            <div>Qty: {quantity}</div>
            <div>${(product.price * quantity).toFixed(2)}</div>
          </li>
        ))}
      </ul>
      <h2>Total: ${total.toFixed(2)}</h2>
    </div>
  );
}