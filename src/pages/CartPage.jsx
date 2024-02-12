import axios from "axios";
import { useEffect, useState } from "react";

function CartPage() {
  const [cart, setCart] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchCartDetails = async () => {
      try {
        const cartResponse = await axios.get(
          "https://fakestoreapi.com/carts/1"
        );
        const cartData = cartResponse.data;

        const productDetailsPromises = cartData.products.map(
          async (productId) => {
            const productResponse = await axios.get(
              `https://fakestoreapi.com/products/${productId}`
            );
            return productResponse.data;
          }
        );
        const productDetails = await Promise.all(productDetailsPromises);
        const updatedCart = cartData.products.map((productId, index) => ({
          productId,
          quantity: cartData.quantities[index],
          productDetails: productDetails[index],
        }));
        setCart(updatedCart);
        setLoading(false);
      } catch (error) {
        console.log("Error");
        setLoading(false);
      }
    };
    fetchCartDetails();
  }, []);

  return (
    <div className="CartPage">
      <h1>Shopping Cart</h1>
      {loading ? (
        <p>Loading cart...</p>
      ) : (
        <ul>
          {cart.map((cartItem, index) => (
            <li key={index}>
              <img src={cartItem.productDetails.image} alt={cartItem.productDetails.title}/>
              <p>{cartItem.productDetails.title}</p>
              <p>Quantity: {cartItem.quantity}</p>
              <p>Price: ${cartItem.productDetails.price}</p>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default CartPage;
