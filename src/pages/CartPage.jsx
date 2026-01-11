import { useEffect, useState } from "react";

const CartPage = () => {
  const [cartProducts, setCartProducts] = useState([]);
  const [total, setTotal] = useState(0);
  useEffect(() => {
    let cartArray = [];
    let total = 0;
    async function getCart() {
      try {
        const res = await fetch("https://fakestoreapi.com/carts/3");
        const data = await res.json();
        console.log(data);

        for (let i = 0; i < data.products.length; i++) {
          const item = data.products[i];
          const response2 = await fetch(
            `https://fakestoreapi.com/products/${item.productId}`
          );
          const data2 = await response2.json();
          console.log(data2);
          data2.quantity = item.quantity;
          cartArray.push(data2);
          total += data2.price * item.quantity;
        }
        setCartProducts(cartArray);
        setTotal(total);
      } catch (error) {
        console.log(error);
      }
    }
    getCart();
  }, []);

  return (
    <div>
      <h1>Cart</h1>
      {cartProducts.map((product) => {
        return (
          <div className="product-card" key={product.id}>
            <img src={product.image} />
            <p>Price: {product.price}</p>
            <p>Quantity: {product.quantity}</p>
          </div>
        );
      })}

      <h1>Total: ${total.toFixed(2)}</h1>
    </div>
  );
};
export default CartPage;
