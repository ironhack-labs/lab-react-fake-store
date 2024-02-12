import { useState, useEffect } from "react";
import axios from "axios";

function CartPage() {
  const [cart, setCart] = useState([]);

  useEffect(() => {
    // Fetch details of the cart using the cart ID
    axios.get('https://fakestoreapi.com/carts/1') // Assuming cart ID is 1
      .then(response => setCart(response.data.products))
      .catch(e => console.log('Error fetching cart details:', e));
  }, []);

  return (
    <div className="CartPage">
   
      <ul>
        {cart.map(item => (
          <li key={item.id}>
            {item.title} - ${item.price}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default CartPage;
