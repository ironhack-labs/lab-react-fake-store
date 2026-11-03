import { useState, useEffect } from "react";

function CartPage() {
  const [cart, setCart] = useState(null);
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch("https://fakestoreapi.com/carts/5")
      .then((response) => response.json())
      .then((data) => {
        setCart(data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  useEffect(() => {
    if (!cart) return;

    fetch("https://fakestoreapi.com/products")
      .then((response) => response.json())
      .then((data) => {
        const cartProducts = cart.products.map((cartItem) => {
          const product = data.find(
            (product) => product.id === cartItem.productId
          );

          return {
            ...product,
            quantity: cartItem.quantity,
          };
        });

        setProducts(cartProducts);
      })
      .catch((error) => {
        console.log(error);
      });
  }, [cart]);

  if (!cart) {
    return <p>Loading cart...</p>;
  }

  return (
    <div>
      <h1>Shopping Cart</h1>

      {products.map((product) => (
        <div key={product.id}>
          <h2>{product.title}</h2>

          <img
            src={product.image}
            alt={product.title}
            width="100"
          />

          <p>Price: {product.price} €</p>
          <p>Quantity: {product.quantity}</p>
          <p>
            Subtotal: {(product.price * product.quantity).toFixed(2)} €
          </p>
        </div>
      ))}
    </div>
  );
}

export default CartPage;
