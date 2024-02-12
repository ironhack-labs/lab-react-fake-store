import axios from "axios"
import { useEffect, useState } from "react"
import { Link } from "react-router-dom";


function CartPage() {

    const [cart, setCart] = useState(null)
    const [cartProducts, setcartProducts] = useState([]);

    useEffect(() => {
        axios.get("https://fakestoreapi.com/carts/5")
            .then((response) => {
                setCart(response.data)
            })
            .catch((e) => {
                console.log(e)
            })
    }, [])

    useEffect(() => {
        axios.get("https://fakestoreapi.com/products")
            .then((response) => {
                setcartProducts(response.data)
            })
            .catch((e) => {
                console.log(e)
            })
    }, [])

    return (
        <div className="cart">

            {cart !== null &&
                cart.products.map((elm,index) => {
                    console.log(elm)

                    console.log(cartProducts[elm.productId])
                    return (
                        <div className="ProductListPage" key={elm.productId}>
                                <div className="listPage">
                                    <img src={cartProducts[elm.productId].image} alt={cartProducts[elm.productId].title} className="productImg" />
                                    <div className="title">{cartProducts[elm.productId].title}</div>
                                    <div>Quantity: {elm.quantity}</div>
                                    <div>${cartProducts[elm.productId].price}</div>
                                </div>
                        </div>
                    )
                })
            }

        </div>
    )

}

export default CartPage;