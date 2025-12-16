import { useState, useEffect } from "react";

function Cart() {
  const [cartProducts, setCartProducts] = useState([]);
  const [cart, setCart] = useState(null);

  useEffect(() => {
    async function getTheCart() {
      try {
        const response = await fetch(`https://fakestoreapi.com/carts`);
        const data = await response.json();
        setCart(data);
      } catch (error) {
        console.log(error);
      }
    }
    getTheCart();
  }, []);

  useEffect(() => {
    if (!cart) return;

    async function getProducts() {
      try {
        const response = await fetch(`https://fakestoreapi.com/products`);
        const products = await response.json();
        setCartProducts(products);
      } catch (error) {
        console.log(error);
      }
    }
    getProducts();
  }, [cart]);

  return (
    <div>
      {cartProducts.map((product) => (
        <div key={product.id}>
          <img src={product.image} />
          <h4>{product.title}</h4>
          <p>Price: €{product.price}</p>
        </div>
      ))}
    </div>
  );
}
export default Cart;
