import { useEffect, useState } from "react";
import axios from "axios";

function CartPage() {
  const [detailedItems, setDetailedItems] = useState([]);

  useEffect(() => {
    axios
      .get("https://fakestoreapi.com/carts/5")
      .then((response) => {
        const products = response.data.products;

        const productDetailPromises = products.map((item) =>
          axios.get(`https://fakestoreapi.com/products/${item.productId}`)
        );

        Promise.all(productDetailPromises)
          .then((responses) => {
            const detailed = responses.map((res, i) => ({
              ...res.data,
              quantity: products[i].quantity,
            }));
            setDetailedItems(detailed);
          })
          .catch((err) => {
            console.error("Error fetching product details:", err);
          });
      })
      .catch((err) => {
        console.error("Error fetching cart data:", err);
      });
  }, []);

  return (
    <div className="p-8 mt-20">
      <h1 className="text-2xl font-bold mb-4">Shopping Cart</h1>
      {detailedItems.length === 0 ? (
        <p>Your cart is empty or still loading.</p>
      ) : (
        <ul>
          {detailedItems.map((item) => (
            <li key={item.id} className="mb-4 p-4 border rounded shadow">
              <h2 className="text-lg font-semibold">{item.title}</h2>
              <p>Quantity: {item.quantity}</p>
              <p>Price: ${item.price}</p>
              <img src={item.image} alt={item.title} className="h-20 mt-2" />
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default CartPage;