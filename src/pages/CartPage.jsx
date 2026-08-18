import React, { useEffect, useState } from "react";
import axios from "axios";
function CartPage() {
  const [cart, setCart] = useState(null);
  const [products, setProducts] = useState([]);

  useEffect(() => {
    axios
      .get("https://fakestoreapi.com/carts/5")
      .then((respose) => {
        setCart(respose.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  useEffect(() => {
    axios
      .get("https://fakestoreapi.com/products")
      .then((response) => {
        setProducts(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, [cart]);
  return (
    <div>
      <h1>Shopping Card</h1>
      {cart &&
        cart.products.map((eachProduct) => {
          const foundProduct = products.find((product) => {
            return product.id === eachProduct.productId;
          });
          if (!foundProduct) {
            return null;
          }

          return (
            <div key={foundProduct.id}>
              <img src={foundProduct.image} width="100px" />
              <h2>{foundProduct.title}</h2>

              <p>Price: {foundProduct.price} €</p>

              <p>Quantity: {eachProduct.quantity}</p>
            </div>
          );
        })}
    </div>
  );
}

export default CartPage;
