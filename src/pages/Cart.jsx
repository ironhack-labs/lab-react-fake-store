import React, { useState, useEffect } from "react";

const cart = () => {
  const [oneCart, setCart] = useState();
  const [oneProduct, setOneProduct] = useState();

  //fetch the datas of a cart (5)
  //   useEffect(() => {
  //     const getCart = async () => {
  //       try {
  //         const response = await fetch(`https://fakestoreapi.com/carts/5`);
  //         const data = await response.json();
  //         console.log(data);
  //         setCart(data);
  //       } catch (error) {
  //         console.log(error);
  //       }
  //     };
  //     getCart();
  //   }, []);

  useEffect(() => {
    fetch("https://fakestoreapi.com/carts/5")
      .then((response) => {
        return response.json();
      })
      .then((parsed) => {
        setCart(parsed);
      })
      .catch((err) => console.log(err));
  }, []);

  if (oneCart) {
    // console.log("the cart :", oneCart);
    // console.log("the list of products", oneCart.products);

    oneCart.products.forEach((element) => {
      const elementProductId = element.productId;
      const elementProductQuantity = element.quantity;

      //fetch the current product
      useEffect(() => {
        fetch(`https://fakestoreapi.com/product/${elementProductId}`)
          .then((response) => {
            return response.json();
          })
          .then((parsed) => {
            setOneProduct(parsed);
          })
          .catch((err) => console.log(err));
      }, []);
      console.log("ONE PRODUCT", oneProduct);
    });
  }
  return <div>cart</div>;
};

export default cart;
