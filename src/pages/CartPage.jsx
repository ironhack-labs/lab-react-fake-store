import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

import axios from "axios";

const apiURL = "https://fakestoreapi.com";

function CartPage() {

    const [cartItems, setCartItems] = useState([]);

    useEffect(() => {
        axios.get(`${apiURL}/cart/1`) 
          .then(response => {
            setCartItems(response.data)
            console.log(response.data);
            // Process and save this data in state
            })
          

            Promise.all(cart.products.map(product => 
                axios.get(`${apiURL}/${productId}`)
            ))
            .then(responses => {
                // responses will be an array of axios responses,
                // process these to get an array of product details
                const productDetails = responses.map(response => response.data);
                setCartItems(productDetails);
            })
            .catch(error => {
                console.error("Error fetching product details:", error);
            })
        // })
        .catch(error => {
            console.error("Error fetching cart details:", error);
        });

    }, []);


    return (
      <div>
        <h2>Cart</h2>
        {cartItems.length > 0 ? (
            <ul>
                {cartItems.map((item) => (
                    <li key={item.id}>{item.title} - ${item.price}</li>
                ))}
            </ul>
        ) : (
            <p>Your cart is empty.</p>
        )}
      </div>
    );
  }
  
  export default CartPage;