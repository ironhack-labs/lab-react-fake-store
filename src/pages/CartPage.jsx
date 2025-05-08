import { useEffect, useState } from "react"
import axios from "axios"
import CartCard from "../components/CartCard/CartCard"
import './CartPage.css'

function CartPage({ cartURL, productsURL }) {

    const [cartData, setCartData] = useState({})
    const [products, setProducts] = useState([])
    useEffect(() => {
        getProductsData()
        getCartData()
    }, [])

    const getProductsData = () => {
        axios
            .get(productsURL)
            .then(response => setProducts(response.data))
            .catch(err => `Error (${err}) al cargar los productos.`)
    }

    const getCartData = () => {
        axios
            .get(cartURL)
            .then(response => setCartData(response.data))
            .catch(err => `Error (${err}) al cargar el carrito.`)
    }

    return (
        <div>
            <h1 className="cart-main-title">Shopping Cart</h1>
            <br />
            <CartCard cartData={cartData} products={products} />
        </div >
    )
}

export default CartPage