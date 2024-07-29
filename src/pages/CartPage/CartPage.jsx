import axios from "axios"
import { useEffect } from "react"
import { useParams } from "react-router-dom"
import { useState } from "react"
import CartProducts from "./../CartProducts/CartProducts"

const CartPage = () => {

    const [Cart, setCart] = useState([]);

    const [TotalAmount, setTotalAmount] = useState(0);

    const { id } = useParams()

    useEffect(() => {
        axios
            .get(`https://fakestoreapi.com/carts/${id}`)
            .then(Response => {
                setCart(Response.data.products)
            })
            .catch(err => console.log(err))
    }, [])

    return (
        <div className="cartProductsPage">
            {
                Cart.map((elm, idx) => {
                    return (
                        <CartProducts key={idx} {...elm} />
                    )
                })
            }
        </div>
    )
}

export default CartPage