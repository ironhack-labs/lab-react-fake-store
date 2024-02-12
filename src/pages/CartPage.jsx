import { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";

function CartPage() {
    const [cart, setCart]=useState([])
    const cartID = useParams().cartId

    useEffect(()=>{
        fetch(`https://fakestoreapi.com/carts/${cartID}`)
        .then(response => response.json())
        .then(jsonData => setCart(jsonData))
        .catch(error => console.error(error));
        console.log(cart);
      }, [])

    return(
        <>
            <p>{cartID}</p>
        </>
       )
}

export default CartPage;