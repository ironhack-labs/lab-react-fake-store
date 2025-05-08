import axios from "axios"
import { useEffect, useState } from "react"
import ProductCard from "../../components/ProductCard/ProductCard"

const CartPage = () => {

    const { cartProducts, setCartProducts } = useState({})
    const { isLoading, setIsLoading } = useState(true)

    useEffect(() => {
        axios
            .get('https://fakestoreapi.com/carts/6')
            .then(response => {
                setCartProducts(response.data)
                setIsLoading(false)
            })
    })

    return (
        <div>
            <h1>hola</h1>
        </div>

    )
}

export default CartPage