import { useEffect, useState } from "react";
import axios from "axios";

function CartPage() {
  const [cart, setCart] = useState(null);
  const [products, setProducts] = useState([]);

  useEffect(() => {
    // Get the cart
    axios
      .get("https://fakestoreapi.com/carts/5")
      .then((response) => {
        setCart(response.data);
      })
      .catch((error) => {
        console.log(error);
      });

    // Get all product details
    axios
      .get("https://fakestoreapi.com/products")
      .then((response) => {
        setProducts(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  return (
    <div>
      <h1>Cart</h1>

      {cart &&
        cart.products.map((cartProduct) => {
          const product = products.find(
            (product) => product.id === cartProduct.productId,
          );

          return (
            <div key={cartProduct.productId}>
              {product && (
                <>
                  <h2>{product.title}</h2>
                  <img src={product.image} alt={product.title} width="100" />
                  <p>€{product.price}</p>
                  <p>Quantity: {cartProduct.quantity}</p>
                </>
              )}
            </div>
          );
        })}
    </div>
  );
}

export default CartPage;
