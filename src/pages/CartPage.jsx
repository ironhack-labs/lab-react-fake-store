import { useEffect, useState } from "react";

const CartPage = () => {
    const [products, setProducts] = useState
    ([]);

    const fetchCartProducts = async() => {
        try{
            const response =await fetch('https://fakestoreapi.com/carts/1')
            if (response.ok) {
                const cartData = await response.json()

                cart
            }
        } catch(error) {
            console.log(error)
        }
    }
    useEffect(() => {
        fetchCartProducts()
    },[])

    return ( 
        <>
        <h1>Cart</h1>
        </>
     );
}
 
export default CartPage;