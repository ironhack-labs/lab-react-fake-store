import { useEffect, useState } from "react";

function CartPage() {
  const [cart, setCart] = useState(null);

  useEffect(() => {
    getData();
  }, []);

  const getData = async () => {
    try {
      const response = await fetch(
        "https://fakestoreapi.com/carts/1",
      );
      const data = await response.json();
      setCart(data);
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <div className="CartPage">
      <h1>Shopping Cart</h1>
    </div>
  );
}
export default CartPage;
