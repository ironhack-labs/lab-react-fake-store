import { useEffect, useState } from "react";
import { Link } from "react-router-dom";


function CartPage() {
  // The state variable `products` is currently an empty array [], 
  // but you should use it to store the response from the Fake Store API (the list of products).
  const [cart, setCart] = useState([]);
  
  const fetchCartProducts = async () => {
    try {
      const response = await fetch(`https://fakestoreapi.com/carts`);
      if (!response.ok) {
        throw new Error("Network response was not ok");
      }
      const parsedResponse = await response.json();
      setProducts(parsedResponse);
    } catch (error) {
      console.error("Error fetching products:", error);
    }
  };

  useEffect(() => {
    fetchCartProducts();
  }, []);


  // To fetch the lixsst of products, set up an effect with the `useEffect` hook:


  return (
    <div className="ProductListPage">
      <ul> 
        {cart.map((carts) => (
            <Link to={`https://fakestoreapi.com/carts/${carts.id}`}>
          <li key={carts.id} className="card">
            <img src={carts.image} alt={cart.title} /> 
            <h3>{carts.title}</h3> <p className="content">{cart.category}</p> <p className="content">{cart.price}</p> <p className="content">{cart.description}</p></li>
            </Link>
        ))} 
      </ul>
      {/* Render list of products here */}
      <Link to="/"> <button type="button">Back to the main page</button> </Link>
    </div>
  );
}

export default CartPage;
