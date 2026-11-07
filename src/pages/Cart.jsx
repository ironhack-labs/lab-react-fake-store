import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

const {cartId} = useParams();

function CartPage(){

    const [cart, setCart] =useState({})

    useEffect(()=>{
        fetch ("`https://fakestoreapi.com/carts/${cartId}`")
        .then (response =>response.json())
        .then (data => {
            setCart(data);
        });
    }, [cartId])
    
      return (
        <div className="CartPage">
          {cart && (
            <div>
              <h2>Cart #{cart.id}</h2>
              <p>User ID: {cart.userId}</p>
              <p>Date: {cart.date}</p>
    
              {cart.products.map(item => (
                <div key={item.productId}>
                  <p>Product ID: {item.productId}</p>
                  <p>Quantity: {item.quantity}</p>
                </div>
              ))}
            </div>
          )}
        </div>
      );
    }
    
    export default CartPage;