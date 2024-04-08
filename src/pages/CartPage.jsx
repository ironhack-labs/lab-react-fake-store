import { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import axios from "axios";

const CardPage = () => {
  // The state variable `product` is currently an empty object {},
  // but you should use it to store the response from the Fake Store API (the product details).
  const [cart, setCart] = useState({ products: [] });
  const [products, setProducts] = useState([]);
  const [fetching, setFetching] = useState(true);

  // The `productId` coming from the URL parameter is available in the URL path.
  // You can access it with the `useParams` hook from react-router-dom.
  const { cartId } = useParams();

  // To fetch the product details, set up an effect with the `useEffect` hook:
  // To fetch the list of products, set up an effect with the `useEffect` hook:

  useEffect(() => {
    console.log("useEffect - Initial render (Mounting)");
    console.log(cartId);
    const cartURL = `https://fakestoreapi.com/carts/${cartId}`;
    axios
      .get(cartURL)
      .then((response) => {
        // Handle success
        console.log("Cart details:", response);
        setCart(response.data);

        return Promise.all(
          response.data.products.map((prod) =>
            axios.get(`https://fakestoreapi.com/products/${prod.productId}`)
          )
        );
      })
      .then((productResponses) => {
        // Once all product details are fetched, update the products state.
        const productDetails = productResponses.map(
          (response) => response.data
        );
        console.log("Product details:", productDetails);
        setProducts(productDetails);
        setFetching(false); // Update the fetching state to indicate loading is complete.
      })
      .catch((error) => {
        // Handle error
        console.error("Error fetching cart or product details:", error);
        setFetching(false);
      });
  }, [cartId]);

  return (
    <div>
      {fetching ? <p>Loading...</p> : <h1>Your Cart: {cart.id}</h1>}
      {/* Display product details */}
      {products.map((prod, index) => (
        <div key={index} className="card">
          <h3>Quantity: {cart.products[index].quantity}</h3>
          <img src={prod.image} alt="prod" />
          <div className="title">
            <h3>{prod.title}</h3>
          </div>
          <div className="category">
            <h3>{prod.category}</h3>
          </div>
          <div className="price">
            <h3>{prod.price}</h3>
          </div>
          <div className="description">
            <p>{prod.description}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default CardPage;
