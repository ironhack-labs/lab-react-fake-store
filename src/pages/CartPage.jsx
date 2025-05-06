
/*
import React, { useState, useEffect } from "react";

const CartPage = () => {
     
    const [cart, setCart] = useState([]);
    useEffect(() => {
      const fetchCart = async () => {
       try {
        
        const Response = await fetch(`https://fakestoreapi.com/carts/5`);
        const Data = await Response.json();

        
        const productDetails = await Promise.all(
            Data.products.map(async (oneproduct) => {
            const res = await fetch(`https://fakestoreapi.com/products/${oneproduct.productId}`);
            const productData = await res.json();
            return { ...productData, quantity: item.quantity }; 
          })
        );

        setCart(productDetails);
       
      } catch (err) {
      
      }
    };

    fetchCart();
  }, []);

 
 
 
  return (
    <div>
      <h1>Your Cart</h1>
      {cart.length === 0 ? (
        <p>Your cart is empty.</p>
      ) : (
        <div>
          {cart.map((item) => (
            <div
              key={item.id}
              style={{
                display: "flex",
                alignItems: "center",
                marginBottom: "20px",
                border: "1px solid #ddd",
                padding: "10px",
              }}
            >
              <img
                src={item.image}
                alt={item.title}
                style={{ width: "100px", height: "100px", objectFit: "contain", marginRight: "20px" }}
              />
              <div>
                <h3>{item.title}</h3>
               
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );

}

export default CartPage
*/