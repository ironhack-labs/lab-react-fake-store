import { useEffect, useState } from "react";
import axios from "axios";

function Cart() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    async function showCart() {
      try {
        const { data: cart } = await axios.get(
          "https://fakestoreapi.com/carts/5"
        );
        const { products } = cart;
        const cartProducts = [];
        for (const product of products) {
          const item = await axios(
            `https://fakestoreapi.com/products/${product.productId}`
          );
          const cartProduct = { item: item.data, quantity: product.quantity };
          cartProducts.push(cartProduct);
        }
        setProducts(cartProducts);
      } catch (err) {
        console.log(err);
      }
    }
    showCart();
  }, []);

  console.log(products);

  return (
    <div>
      <h2>CART</h2>
      {products.map((product) => {
        return (
          <div key={product.item.id}>
            <img src={product.item.image} alt="" />
            <p>{product.item.category}</p>
            <p>{product.item.title}</p>
            <p>${product.item.price}</p>
            <p>{product.item.description}</p>
            <p>Quantity: {product.quantity}</p>
          </div>
        );
      })}
    </div>
  );
}

export default Cart;
