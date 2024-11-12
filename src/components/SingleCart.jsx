import { useState, useEffect } from "react";

function SingleCart({ cartId }) {
  const [cartProduct, setCartProduct] = useState({});
  const cartDetailUrl = `https://fakestoreapi.com/carts/${cartId}`;

  async function getCartDetails() {
    try {
      const response = await fetch(cartDetailUrl);
      const jsonResponse = await response.json();
      setCartProduct(jsonResponse);
    } catch (error) {
      console.log("The error is:", error);
    }
  }

  useEffect(() => {
    if (cartId) {
      getCartDetails();
    }
  }, [cartId]);

  return (
    <>
      <h3>User ID: {cartProduct.userId}</h3>
      <div>
        {cartProduct.products?.map((product, index) => (
          <p key={index}>
            Product ID: {product.productId}, Quantity: {product.quantity}
          </p>
        ))}
      </div>
    </>
  );
}

export default SingleCart;
