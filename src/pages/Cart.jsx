import { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";

export default function Cart(){
  // The state variable `product` is currently an empty object {},
  // but you should use it to store the response from the Fake Store API (the product details).
  const [cart, setCart] = useState({});

  // The `productId` coming from the URL parameter is available in the URL path.
  // You can access it with the `useParams` hook from react-router-dom.
  const { productId } = useParams();

  // To fetch the product details, set up an effect with the `useEffect` hook:
  useEffect(() => {
    fetch(`https://fakestoreapi.com/carts/5`)
      .then((response) => response.json())
      .then((data) => setCart(data));

  }, [productId]);
      console.log(cart)
    return(
      <div className="mt-32 max-w-2xl mx-auto flex flex-col items-start">
        <h2 className="font-bold text-xl py-6">{cart.date}</h2>
        <div>{cart.products}</div>
        <button className="mt-6 py-1 px-4 text-xl rounded-xl bg-green-600 text-white">
          Pay
        </button>
        <Link to="/">
          <button className="mt-6 py-1 px-4 text-sm rounded-md bg-gray-300">
            back
          </button>
        </Link>
      </div>
    )
}