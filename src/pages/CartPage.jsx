import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

export default function CartPage() {
  const { cartId } = useParams();
  const [cartItems, setCartItems] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    axios.get("https://fakestoreapi.com/carts/3")
      .then(cartResponse => {
        const products = cartResponse.data.products;

        const productDetailsPromises = products.map(product =>
          axios.get(`https://fakestoreapi.com/products/${product.productId}`)
        );

        return Promise.all(productDetailsPromises)
          .then(productDetailsResponses => {
            const detailedProducts = productDetailsResponses.map((res, index) => ({
              ...res.data,
              quantity: products[index].quantity
            }));
            setCartItems(detailedProducts);
          });
      })
      .catch(error => {
        console.error("Error fetching cart details:", error);
      })
      .finally(() => {
        setLoading(false);
      });
  }, [cartId]);

  if (loading) {
    return <p>Loading...</p>;
  }

  return (
    <div className="CartPage">
      <h2>Shopping Cart</h2>
      {cartItems.length === 0 ? (
        <p>Your cart is empty.</p>
      ) : (
        <div className="cartItemsList">
          {cartItems.map(item => (
            <div key={item.id} className="cartItem">
              <img src={item.image} alt={item.title} />
              <p><strong>{item.title}</strong></p>
              <p>Price: ${item.price}</p>
              <p>Quantity: {item.quantity}</p>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

