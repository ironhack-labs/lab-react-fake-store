import axios from "axios"
import { useEffect, useState } from "react"

function CartPage() {
  const [cart, setCart] = useState(null)

  useEffect(() => {
    const fetchCart = async () => {
      try {
        const response = await axios.get("https://fakestoreapi.com/carts/3")
        console.log(response.data)
        setCart(response.data)
      } catch (error) {
        console.log(error)
      }
    }

    fetchCart()
  }, [])

  return (
    <div>
      {cart ? (
        <div>
          <h2>Welcome user with user id: {cart.userId}</h2>
          <span>cart date: {cart.date}</span>
          {cart.products.length ? (
            cart.products.map((product) => <h3>{product.productId}</h3>)
          ) : (
            <span>No products added to the cart</span>
          )}
        </div>
      ) : (
        <span>Loading....</span>
      )}
    </div>
  )
}

export default CartPage