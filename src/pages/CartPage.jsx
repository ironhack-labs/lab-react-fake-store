import { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";

function CartPage() {

    const [cart, setCart] = useState(null);
    const params = useParams()
    const navigate = useNavigate()

    useEffect(() => {
        fetch(`https://fakestoreapi.com/carts/${params.cartId}`)
            .then((response) => {
                return response.json()
            })
            .then((response) => {
                console.log(response)
                setCart(response)
            })
            .catch((error) => {
                console.log(error)
            })
    }, [])

    const handleBackButtonClick = (() => {
        navigate("/")
    })
    if (cart === null) {
        return(
            <h3>No cart found</h3>
        )
    }
    return (
        <div className="ProductListPage">
              <br />
              {cart.products.map((product) => {
                return(
                  <div>
                    <p>{product.productId}</p>
                    <p>{product.quantity}</p>
                  </div>
                )
              })}
            </div>
    )
}

export default CartPage