import React from 'react'
import axios from 'axios'
import { useState } from 'react'
import { useEffect } from 'react'


export default function Cart() {

    const [cart, setCart] = useState(null);

    const getCart = async () => {
        try {
            const response = await axios.get("https://fakestoreapi.com/carts/5");
            setCart(response.data)
        } catch (error) {
            console.log(error)
        }
    }

    useEffect(() => {
        getCart()
    }, [])


  return (
    <div>
      {cart ? () : ()}
    </div>
  )
}
