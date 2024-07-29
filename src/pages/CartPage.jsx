import axios from "axios"
import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import './CartPage.css'
import ProductCartRow from "../components/ProductCartRow/ProductCartRow"

const CartPage = () => {

    const [cart, setCart] = useState()
    const [isLoading, setIsLoading] = useState(true)

    useEffect(() => {
        axios
            .get(`https://fakestoreapi.com/carts/6`)
            .then(response => {
                setCart(response.data)
                setIsLoading(false)

            })
            .catch(err => console.log(err))
    }, [])

    return (
        <div>
            {
                isLoading
                    ? <h1>LOADING CART......</h1>
                    : <div className="CartPage">
                        <h1>CARRITO COMPRA</h1>
                        <p>{cart.date}</p>
                        {
                            cart.products.map(elm => {
                                return (
                                    <ProductCartRow {...elm} />
                                )
                            })
                        }

                    </div>
            }
        </div>
    )
}

export default CartPage