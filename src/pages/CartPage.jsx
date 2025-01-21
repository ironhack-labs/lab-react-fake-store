import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import ProductCard from "../components/ProductCard";

function CartPage() {
  const [cart, setCart] = useState({});
  const { cartId } = useParams();
  const [products, setProducts] = useState([]);

  // To fetch the list of carts, set up an effect with the `useEffect` hook:
  const getCart = () => {
    axios
      .get(`https://fakestoreapi.com/carts/${cartId}`)
      .then((response) => setCart(response.data))
      .catch((error) => console.log(error));
  };

  // To fetch the list of products, set up an effect with the `useEffect` hook:
  const getAllProducts = () => {
    axios
      .get("https://fakestoreapi.com/products")
      .then((response) => setProducts(response.data))
      .catch((error) => console.log(error));
  };

  useEffect(() => {
    getCart();
    getAllProducts();
  }, []);

  return (
    <div>
      <div className="container d-flex justify-content-between">
        <h1>Cart id: {cart.id}</h1>
        <h1>User id: {cart.userId}</h1>
      </div>
      <h1 className="text-center">Products in the cart</h1>
      {cart.products.map((element) => (
        <ProductCard
          key={element.productId}
          product={products.filter((product) => product.id === element.productId)[0]}
        />
      ))}
    </div>
  );
}

export default CartPage;
