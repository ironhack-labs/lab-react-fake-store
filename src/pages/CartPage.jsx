import axios from "axios";
import { useEffect, useState } from "react";
import CartProduct from "../components/CartProduct";

const CartPage = () => {
  const [cart, setCart] = useState({});
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    axios
      .get("https://fakestoreapi.com/carts/6")
      .then(response => {
        setCart(response.data)
        setIsLoading(false)
      })
      .catch(err => console.log(err))

  }, [])

  return (
    isLoading
      ?
      <h1>Loading Cart...</h1>
      :
      <section className="CartPage">
        <h1>Checkout Cart</h1>
        <p>{cart.date}</p>
        <div className="container">
          <table>
            <thead className="bg-gray-300 p-3">
              <tr>
                <th>Product</th>
                <th>Price</th>
                <th>Quantity</th>
                <th>Total</th>
              </tr>
            </thead>
            <tbody>
              {
                cart.products.map(product => {
                  return (
                    <CartProduct key={product.productId} productId={product.productId} quantity={product.quantity} />
                  )
                })
              }
            </tbody>
          </table>
          <hr />

        </div>
      </section>
  )
}

export default CartPage