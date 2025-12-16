import { useEffect, useState } from "react";

function ShoppingCard() {
  const [cart, setCart] = useState([]);

  useEffect(() => {
    fetch("https://fakestoreapi.com/carts")
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        console.log(data);
        setCart(data);
      })
      .catch((error) => console.log(error));
  }, []);

  return (
    <div>
      <h1>Shopping Cart</h1>
    </div>
  );
}
export default ShoppingCard;
