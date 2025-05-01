import { useEffect, useState } from "react";

const CartPage = () => {
  const [cartItems, setCartItems] = useState([]);
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch(`https://fakestoreapi.com/carts/5`)
      .then((response) => response.json())
      .then((data) => setCartItems(data));

    fetch("https://fakestoreapi.com/products")
      .then((response) => response.json())
      .then((data) => setProducts(data));
  }, []);

  function getProductDetails(productId) {
    return products.find((product) => product.id === productId);
  }
  console.log(cartItems)

  return (
    <div>
      <h1>Cart Page</h1>
   
    </div>
  );
};
export default CartPage;
