import React, { useEffect, useState } from "react";
import axios from "axios";

const CartPage = () => {
  const [cart, setCart] = useState(null);

  useEffect(() => {
    axios
      .get("https://fakestoreapi.com/carts/1")
      .then((response) => setCart(response.data))
      .catch((error) => console.error("Error al obtener el carrito:", error));
  }, []);

  if (!cart) {
    return <p>Cargando carrito...</p>;
  }

  return (
    <div className="container">
      <h1>Carrito de Compras</h1>
      {cart.products.map((item) => (
        <div key={item.productId} className="cart-item">
          <p><strong>ID del producto:</strong> {item.productId}</p>
          <p><strong>Cantidad:</strong> {item.quantity}</p>
        </div>
      ))}
    </div>
  );
};

export default CartPage;
