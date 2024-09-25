import { useState, useEffect } from 'react'
import axios from 'axios'
import { useParams } from 'react-router-dom'

function CartPage() {

  const [ cartItems, setCartItems ] = useState(null)
  const cartIdExample = 5

  const { productId } = useParams()

  useEffect(() => {
    fetchCartItems()
  }, [])

  const fetchCartItems = async () => {
    try {
      // fetch -> cart details
      const cartResponse = await axios.get(`https://fakestoreapi.com/carts/${cartIdExample}`)
      const itemsInCart = cartResponse.data.products

      console.log(itemsInCart)

      // fetch -> each product in cart details using id
      const productsDetails = await Promise.all(
        itemsInCart.map(product =>
          axios.get(`https://fakestoreapi.com/products/${product.productId}`)
        )
      )

      const cartProductsAndDetails = productsDetails.map(response => response.data)
      setCartItems(cartProductsAndDetails) // updates state with all cart products and details
    } catch (error) {
      console.log(error)
    }
  }

  // managing loading...
  if (cartItems === null) {
    return <h2>...loading</h2>
  }


  return (
    <div className='CartProducts'>
    <h2>Cart Products</h2>
    

      {cartItems.map(product => (
        <div className='ProductCard' key={product.id}>
            <img src={product.image} style={{ width: '300px', height: 'auto'}} />
            <h2>{product.title}</h2>
            <p>{product.price}</p>
        </div>
      ))}
    </div>

  )
}

export default CartPage