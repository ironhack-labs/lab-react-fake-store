import axios from "axios";
import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

const CartPage = () => {
  const { cartId } = useParams();

  const [oneCart, setOneCart] = useState();

  useEffect(() => {
    async function getOneCart() {
      try {
        const { data } = await axios.get(
          `https://fakestoreapi.com/carts/${cartId}`
        );
        setOneCart(data);
      } catch (error) {
        console.log(error);
      }
    }
    getOneCart();

    return () => {
      console.log("All Clean");
    };
  }, [cartId]);

  const cartArray = [];

  oneCart.products.forEach((oneItem) => {
    useEffect(() => {
      async function getOneProduct() {
        try {
          const oneCartItem = await axios.get(
            `https://fakestoreapi.com/products/${oneItem.productId}`
          );
          console.log(oneCartItem);
        } catch (error) {
          console.log(error);
        }
      }
      getOneProduct();
    });
  });

  return (
    <div>
      <h1></h1>
    </div>
  );
};

export default CartPage;
