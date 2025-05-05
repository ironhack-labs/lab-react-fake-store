import React, { useState, useEffect } from "react";
import axios from "axios";

const CartPage = () => {
  const [cart, setCart] = useState([]);
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const fetchCart = async () => {
      try {
        const response = await axios.get("https://fakestoreapi.com/carts/1"); // You may change the ID
        setCart(response.data.products);
      } catch (error) {
        console.error("Error fetching cart data:", error);
      }
    };

    fetchCart();
  }, []);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const productsDetails = await Promise.all(
          cart.map((item) =>
            axios.get(`https://fakestoreapi.com/products/${item.productId}`)
          )
        );
        setProducts(productsDetails.map((res) => res.data));
      } catch (error) {
        console.error("Error fetching product details:", error);
      }
    };

    if (cart.length > 0) {
      fetchProducts();
    }
  }, [cart]);

  return (
    <div className="cart-page">
      <h1>Cart</h1>
      <ul>
        {products.map((product) => (
          <li key={product.id}>
            <p>{product.title}</p>
            <p>{product.price}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default CartPage;
