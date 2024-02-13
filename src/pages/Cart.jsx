import axios from "axios";
import { useEffect } from "react";
import { useState } from "react";

function Cart () {
    const [cart, setCart] = useState(null);

    useEffect(() => {
        axios.get(`https://fakestoreapi.com/carts?sort=desc`)
        .then(res=>res.json())
        .then(json=>console.log(json))
        .catch((error) => {
            console.log(error)
        })
    })

    return (
        <div>
            
        </div>
    )

}

export default Cart