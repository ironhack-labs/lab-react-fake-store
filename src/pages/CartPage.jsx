import { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

function CartPage() {
  const [cartItems, setCartItems] = useState([]);
  const [fetching, setFetching] = useState(true);

  useEffect(() => {
    axios
      .get("https://fakestoreapi.com/carts/5")
      .then(async (cartResponse) => {
        const cart = cartResponse.data;

        // Then fetch details for each product in the cart
        const productPromises = cart.products.map((cartProduct) =>
          axios.get(`https://fakestoreapi.com/products/${cartProduct.productId}`).then((response) => ({
            ...response.data,
            quantity: cartProduct.quantity,
          }))
        );

        const productsWithDetails = await Promise.all(productPromises);
        setCartItems(productsWithDetails);
        setFetching(false);
      })
      .catch((error) => {
        console.error("Error fetching cart:", error);
        setFetching(false);
      });
  }, []);

  if (fetching) {
    return <div className="max-w-7xl mx-auto p-8">Loading cart...</div>;
  }

  return (
    <div className="max-w-7xl mx-auto p-8">
      <h1 className="text-2xl font-bold mb-8">Shopping Cart</h1>
      <div className="grid grid-cols-1 gap-8">
        {cartItems.map((item) => (
          <div key={item.id} className="border rounded-lg p-8 flex flex-row items-center justify-between bg-white shadow-sm">
            <div className="flex items-center space-x-8">
              <img src={item.image} alt={item.title} className="h-24 w-24 object-contain" />
              <div>
                <h2 className="text-lg font-semibold mb-2">{item.title}</h2>
                <p className="text-gray-600 text-sm mb-2">Quantity: {item.quantity}</p>
                <p className="text-lg font-bold">${item.price}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default CartPage;
