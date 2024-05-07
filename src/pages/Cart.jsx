import { useState } from "react"
import { useEffect} from "react"
import { useParams,Link } from "react-router-dom"

function Cart() {
    const params = useParams()
    const [cart, setCart] = useState({});

    useEffect(()=>{
        fetch(`https://fakestoreapi.com/products/${params.cartId}`)
        .then((response)=>{
          return response.json()
        })
        .then((response)=>{
            setCart(response)
            //console.log(response)   
        })
        .catch((error)=>{
          console.log(error)
        })
    
    
      },[params])

  return (
    <div>{cart.title}</div>
  )
}

export default Cart