import { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";

function CartPage() {
    const [cart, setCart]=useState({});
    const [products, setProducts]=useState([]);
    
    const cartID = useParams().cartId

    useEffect(()=>{
        fetch(`https://fakestoreapi.com/carts/${cartID}`)
        .then(response => response.json())
        .then(jsonData => setCart(jsonData))
        .catch(error => console.error(error));
        console.log(cart);
        fetch('https://fakestoreapi.com/products')
        .then(jsonData => setProducts(jsonData))
        .catch(error => console.error(error));
        console.log(products)
      }, [])

    return(
        <>
            <p>{cartID}</p>
            <ul>
            {cart[cartID][products].map((cartItem)=>{
            <li><span>{cart.products.productId}</span> <span>{cart.products.quantity}</span></li>
            })}
            </ul>
        </>
       )
}

export default CartPage;