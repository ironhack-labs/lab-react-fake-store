import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";
import axios from "axios";
import ProductCard from "../components/ProductCard";
import { v4 as uuidv4 } from "uuid";

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
        <h2 className="h5 fw-bolder">Cart id: {cart.id}</h2>
        <h1 className="text-center">Products in the cart</h1>
        <h2 className="h5 fw-bolder">User id: {cart.userId}</h2>
      </div>
      {cart.products?.map((element) => (
        <>
          <Link key={uuidv4()} to={`/product/details/${element.productId}`}>
            <ProductCard
              key={element.productId}
              product={products.filter((product) => product.id === element.productId)[0]}
            />
          </Link>
          <p key={uuidv4()} className="ms-5 fw-semibold">
            Quantity: {element.quantity}
          </p>
        </>
      ))}
    </div>
  );
}

export default CartPage;
