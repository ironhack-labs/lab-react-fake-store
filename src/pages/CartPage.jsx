import { useEffect } from "react"

import { useState } from "react"

function CartPage() {


  const [carts, setCarts] = useState(null)

  const id = 5

  useEffect(() => {
    getCartData()
  }, [id])

  const getCartData = async () => {
    try {
      const response  = await fetch(`https://fakestoreapi.com/carts/${id}`)
      console.log(response)
      const data = await response.json()
      setCarts(data)
    } catch (error) {
      console.log(error)
    }
  }

  console.log(carts)

  if(carts === null) {
    return <div>Esperando...</div>
  }

  return (
    <div className="CartPage">
    <h2>Cart</h2>

          
        
            <p>{carts.id}</p>
            <ul>
            {carts.products.map((eachProduct) => {
              return eachProduct.quantity
            })}

            {/* Link to={ COMENTARIO EN CODIGO DE JUAN :)} */}

            </ul>

  </div>
  )
}

export default CartPage