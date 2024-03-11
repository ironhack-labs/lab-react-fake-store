import React, { useEffect, useState } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";

function CartPage() {
  const [cart, setCart] = useState(null);
  const { cartId } = useParams();

  useEffect(() => {
    async function getProductsInCart() {
      const cartProductsResponse = await axios
        .get(`https://fakestoreapi.com/carts/${cartId}`)
        .catch((error) => {
          console.log(error);
        });
      const productsDetails$ = cartProductsResponse.data.products.map((p) =>
        axios.get(`https://fakestoreapi.com/products/${p.productId}`)
      );
      const result = await Promise.all(productsDetails$).catch((error) => {
        console.log(error);
      });
      console.log(result);

      const products = result.map((p) => p.data);

      console.log(products);

      setCart(products);
    }

    getProductsInCart(); // Call the function to fetch data
  }, [cartId]);

  // Render the cart data once fetched
  return (
    <div>
      <h1>CartPage</h1>
      {cart ? (
        <div>
          {cart.map((product) => (
            <div key={product.id}>
              <h3>{product.title}</h3>
              <p>{product.description}</p>
              <img src={product.image} alt={product.title} />
              <p>Price: ${product.price}</p>
            </div>
          ))}
        </div>
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
}

export default CartPage;
