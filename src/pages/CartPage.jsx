import { useEffect, useState } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";

function CartPage(){
    const[cart, setCart] = useState([]);
    const {id} = useParams()

    useEffect(()=>{
        axios.get(`https://fakestoreapi.com/carts/${id}`)
        .then((response)=>{setCart(response.data);
            console.log(response)})
        
        .catch((error)=>{console.log(error)})
    }, [])

    return(
        <div>

        </div>
    )
}
export default CartPage