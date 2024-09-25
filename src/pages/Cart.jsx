import { useEffect, useState } from "react";

function Cart() {
  const [cart, setCart] = useState(null);
  const cartId = 5; // No sé traer un ID dinámico, lo hago estático

  useEffect(() => {
    fetch(`https://fakestoreapi.com/carts/${cartId}`)
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        
        setCart(data);
      })
      .catch((error) => {
        console.error(error);
      });
  }, [cartId]);

  if (!cart) {
    return <h3>...Cargando carrito</h3>;
  }

  return (
    <div className="Cart">
      <h1>Carrito de Compras</h1>
      <ul>
        <li>{cart.date}</li>
        {cart.products.map((eachProduct) => (
          <li key={eachProduct.productId}>
            <p>Producto ID: {eachProduct.productId}</p>
            <p>Cantidad: {eachProduct.quantity}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Cart;
