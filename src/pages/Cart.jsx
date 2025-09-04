import React from 'react'
import { useState, useEffect } from "react"

function Cart() {
    const [cart, setCart] = useState([])

    useEffect(() => {
        async function getCart() {
            try {
                const responseList = await fetch("https://fakestoreapi.com/carts/3")
                const dataList = await responseList.json();
                //const responseDetails = await fetch("https://fakestoreapi.com/products")
                //const dataDetails = await responseDetails.json()

                setCart(dataList.products)
            }
            catch (error) {
                console.log(error)
            }
        }
        getCart()
    }, []); 

    return (
        <div>
            <h2>CART</h2>
            <ul>
                      {cart.map((product) => (
                        <li key={product.id}>
                          {product.title} {product.price}€
                          <img src={product.image} alt={product.title} width="100" />
                          </li>
                    
                      ))}
                    </ul>
            </div>
    )
}

export default Cart