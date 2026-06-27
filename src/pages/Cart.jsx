import { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

const API_URL = "https://fakestoreapi.com";

function Cart() {
  const [cart, setCart] = useState({ products: [] });
  const [products, setProducts] = useState([]);

  const getCart = () => {
    axios
      .get(`${API_URL}/carts/5`)
      .then((response) => setCart(response.data))
      .catch((error) => console.log(error));
  };

  const getProducts = () => {
  axios
    .get(`${API_URL}/products`)
    .then((response) => setProducts(response.data))
    .catch((error) => console.log(error));
};

  useEffect(() => {
    getCart();
    getProducts()
  }, []);


  const cartProducts = cart.products
  .map((cartItem) => {
    const productDetails = products.find(
      (product) => product.id === cartItem.productId
    );

    return productDetails
      ? { ...productDetails, quantity: cartItem.quantity }
      : null;
  })
  .filter(Boolean);

  return (
  <div className="container py-8">
    <h1>Shopping Cart</h1>

    {cartProducts.map((product) => (
      <article
        key={product.id}
        className="mb-4 grid grid-cols-[150px_2fr_1fr_1fr]
                   items-center gap-8 rounded-lg bg-white p-5 shadow"
      >
        <img
          src={product.image}
          alt={product.title}
          className="h-32 w-32 object-contain"
        />

        <h3 className="font-bold">{product.title}</h3>

        <p>Quantity: {product.quantity}</p>

        <p className="font-semibold">
          ${(product.price * product.quantity).toFixed(2)}
        </p>
      </article>
    ))}

    <Link to="/">
      <button className="rounded bg-green-500 px-5 py-2 text-white">
        Back
      </button>
    </Link>
  </div>
);
}

export default Cart;
