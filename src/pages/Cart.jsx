import { useEffect, useState } from "react";
import ProductCard from "../components/ProductCard";

const Cart = () => {
  const [cart, setCart] = useState([]);

  useEffect(() => {
    const fetchCart = async () => {
      try {
        const res = await fetch("https://fakestoreapi.com/carts/2");
        const data = await res.json();
    
        let cartProducts = []

        for (let i = 0; i < data.products.length; i++) {
          const oneProduct = data.products[i];
          // console.log(oneProduct)
          const { productId, quantity } = oneProduct;
          const oneProductResp = await fetch(
            `https://fakestoreapi.com/products/${productId}`
          );
          const oneProductData = await oneProductResp.json();
          oneProductData.quantity = quantity;
          cartProducts.push(oneProductData)
          // setCart([...cart, oneProductData]);
        }
        setCart(cartProducts)
      } catch (error) {
        console.log(error);
      }
    };
    fetchCart();
  }, []);

  if (!cart.length) {
    return <p>loading...</p>;
  }

  return (
    <>
      <div className="cart-container">
        <h1>You have {cart.length} products on your cart</h1>

        {cart.map((oneProduct) => {
          return (
            <div key={oneProduct.id} className="cart-cards">
              <ProductCard product={oneProduct} />
              <h1>Quantity: {oneProduct.quantity}</h1>
            </div>
          );
        })}
      </div>
    </>
  );
};

export default Cart;
