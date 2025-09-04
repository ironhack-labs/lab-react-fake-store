import { useEffect, useState } from "react";

export default function CartPage() {
  const [cartProducts, setCartProducts] = useState({});

  async function getCart() {
    const response = await fetch(`https://fakestoreapi.com/carts/5`);
    const data = await response.json();
    console.log(data);
    setCartProducts(data);
  }

  useEffect(() => {
    getCart();
  }, []);
  console.log(cartProducts.products);

  return (
    <div>
      {cartProducts.products &&
        cartProducts.products.map((product) => (
          <div key={product.productId}>
            <span>productId:{product.productId}</span>
            <span>quantity:{product.quantity}</span>
          </div>
        ))}
    </div>
  );
}
