import { useEffect, useState } from 'react'
import axios from 'axios'

function CartPage () {
  const [cartItems, setCartItems] = useState([])
  const [productDetails, setProductDetails] = useState([])

  useEffect(() => {
    // Fetch cart data from API
    axios
      .get(`https://fakestoreapi.com/carts/5`) // Replace '5' with a dynamic cart ID if needed
      .then(res => {
        const productsInCart = res.data.products
        setCartItems(productsInCart)

        // Fetch details for each product in the cart
        const productPromises = productsInCart.map(item =>
          axios.get(`https://fakestoreapi.com/products/${item.productId}`)
        )

        Promise.all(productPromises)
          .then(results => {
            const products = results.map(result => result.data)
            setProductDetails(products)
          })
          .catch(error =>
            console.error('Error fetching product details:', error)
          )
      })
      .catch(error => console.error('Error fetching cart:', error))
  }, [])

  return (
    <div className='CartPage'>
      <h2>Your Cart</h2>
      {productDetails.length > 0 ? (
        productDetails.map(product => (
          <div key={product.id} className='cart-item'>
            <div className='img-frame'>
              <img src={product.image} alt={product.title} />
            </div>
            <div className='description'>
              <p>{product.title}</p>
              <p>${product.price}</p>
            </div>
          </div>
        ))
      ) : (
        <p>Loading cart items...</p>
      )}
    </div>
  )
}

export default CartPage
