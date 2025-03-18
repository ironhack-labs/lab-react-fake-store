import { useState, useEffect } from "react";
import axios from "axios";

export const CartPage = () => {
  const [cart, setCart] = useState([]);
  const [products, setProducts] = useState([]);
  const [myProducts, setMyProducts] = useState([]);

  useEffect(() => {
    // get the "random "cart
    axios
      .get("https://fakestoreapi.com/carts/5")
      .then(({ data }) => {
        // Handle success
        console.log(data);
        setCart(data);
      })
      .catch((error) => {
        // Handle error
        console.log(error);
      });
    // get all products
    axios
      .get("https://fakestoreapi.com/products")
      .then(({ data }) => {
        // Handle success
        console.log(data);
        setProducts(data);
      })
      .catch((error) => {
        // Handle error
        console.log(error);
      });
  }, []);

  useEffect(() => {
    let productsInMyCart = cart.products;
    let myProductArray = [];
    if (productsInMyCart && productsInMyCart.length > 0) {
      myProductArray = productsInMyCart.map((product) => {
        products.filter((prod) => prod.id == product.id);
      });
    }
    console.log("myProductArray : ", myProductArray);
    setMyProducts(myProductArray);
  }, [cart, products]);
  console.log("Cart : ", cart);
  return (
    <>
      <div>CartPage</div>
      <p>cart.date = {cart.date}</p>
      <p>cart.id = {cart.id}</p>
      <div>cart.products =</div>
      {/* {cart.products.map(prod => {(
            <div>
                <p>{prod.productId}</p>
                <p>{prod.quantity}</p>
            </div>
        )})} */}
    </>
  );
};
