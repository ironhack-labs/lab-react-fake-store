import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

import axios from "axios";

const apiURL = "https://fakestoreapi.com";

function CartPage() {

    const [cartItems, setCartItems] = useState([]);

    useEffect(() => {
        axios.get(`${apiURL}/cart/1`) 
          .then((cartResponse) => {
            console.log(cartResponse.data)

            const cartProductIds = cartResponse.data.products.map((product) => product.id);

            return Promise.all(cartProductIds.map((id) => axios.get(`${apiURL}/products/${id}`)));
          })

          .then((productResponses) => {
            const productDetails = productResponses.map((response) => response.data);
            console.log(productDetails);


            setCartItems(productDetails);
          })
          .catch((error) => {
            console.error('Error fetching cart or products details:', error);
          });
    },);

            

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