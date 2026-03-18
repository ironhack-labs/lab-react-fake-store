import axios from "axios"
import { useEffect, useState } from "react"

function CartPage() {

    const [cartItems, setCartItems] = useState([])

    useEffect(() => {

        axios
            .get("https://fakestoreapi.com/carts/5")
            .then((cartResponse) => {
                const cartProducts = cartResponse.data.products

                axios
                    .get("https://fakestoreapi.com/products")
                    .then((productsResponse) => {
                        const allProducts = productsResponse.data
                        const itemsWithDetails = cartProducts.map(cartProduct => {
                            const details = allProducts.find((productObj => {
                                return String(productObj.id) === String(cartProduct.productId)
                            }))
                            return {
                                ...details,
                                quantity: cartProduct.quantity
                            }
                        })
                        setCartItems(itemsWithDetails)
                    })
                    .catch((err) => {
                        console.log(err)
                    })
            })
            .catch((err) => {
                console.log(err)
            })


    }, [])


    return (
        <div className="cart-container">
            <h2>My cart</h2>
            {cartItems.map(itemObj => {
                return (
                    <div key={itemObj.id}>
                        {itemObj.image && <img src={itemObj.image} />}
                        <p>{itemObj.title}</p>
                        <p>Quantity: {itemObj.quantity}</p>
                        <p>Price: {itemObj.price}</p>
                    </div>
                )

            })}
        </div>
    )
}

export default CartPage

