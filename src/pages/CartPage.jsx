import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

const API_URL = "https://fakestoreapi.com";
const CART_ID = 5;

function CartPage() {
  const [cartItems, setCartItems] = useState([]);

  // The cart endpoint only returns { productId, quantity } pairs,
  // so we also fetch all products and merge in the details.
  useEffect(() => {
    Promise.all([
      axios.get(`${API_URL}/carts/${CART_ID}`),
      axios.get(`${API_URL}/products`),
    ])
      .then(([cartResponse, productsResponse]) => {
        const products = productsResponse.data;
        const items = cartResponse.data.products.map(({ productId, quantity }) => ({
          ...products.find((product) => product.id === productId),
          quantity,
        }));
        setCartItems(items);
      })
      .catch((error) => console.log(error));
  }, []);

  const total = cartItems.reduce((sum, item) => sum + item.price * item.quantity, 0);

  return (
    <div className="CartPage max-w-3xl mx-auto p-4 flex flex-col gap-4">
      <h1 className="text-2xl font-bold text-left">Cart</h1>

      {cartItems.map((item) => (
        <Link
          key={item.id}
          to={`/product/details/${item.id}`}
          className="flex items-center gap-6 p-4 border rounded shadow-sm hover:shadow-md transition-shadow"
        >
          <img src={item.image} alt={item.title} className="h-16 w-16 object-contain" />
          <span className="flex-1 font-semibold text-left">{item.title}</span>
          <span className="w-16 text-gray-500">x {item.quantity}</span>
          <span className="w-24 font-bold">${(item.price * item.quantity).toFixed(2)}</span>
        </Link>
      ))}

      {cartItems.length > 0 && (
        <p className="text-right text-xl font-bold">Total: ${total.toFixed(2)}</p>
      )}
    </div>
  );
}

export default CartPage;
