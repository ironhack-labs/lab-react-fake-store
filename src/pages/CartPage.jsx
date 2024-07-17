import React, { useEffect, useState } from "react";
import axios from "axios";

const CartPage = () => {
  const [cart, setCart] = useState([]);
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const fetchCart = async () => {
      try {
        const { data } = await axios.get("https://fakestoreapi.com/carts/5");
        setCart(data.products);

        // Fetch details for each product in the cart
        const productDetailsPromises = data.products.map((product) =>
          axios.get(`https://fakestoreapi.com/products/${product.productId}`)
        );
        const productDetails = await Promise.all(productDetailsPromises);
        setProducts(productDetails.map((response) => response.data));
      } catch (error) {
        console.error("Error fetching cart:", error);
      }
    };

    fetchCart();
  }, []);

  return (
    <div>
      <h1>Cart Page</h1>
      <ul>
        {products.map((product) => (
          <li key={product.id}>
            {product.title} - ${product.price}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default CartPage;
