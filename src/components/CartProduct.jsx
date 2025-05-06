import axios from "axios";
import { useEffect, useState } from "react";


const CartProduct = ({ productId, quantity }) => {
  const [product, setProduct] = useState({});
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    axios
      .get(`https://fakestoreapi.com/products/${productId}`)
      .then(response => {
        setProduct(response.data)
        setIsLoading(false)
      })
      .catch(err => console.log(err))

  }, [])

  const { title, image, price } = product

  return (
    isLoading
      ?
      <tr>
        <td colSpan="4">
          Loading...
        </td>
      </tr>
      :
      <tr className="CartProduct">
        <td className="cart-unit-product flex justify-stretch items-center gap-3">
          <div className="image w-full max-w-xs">
            <img src={image} alt={title} />
          </div>
          <div className="product-info text-left">
            <p className="text-md">{title}</p>

          </div>
        </td>
        <td className="cart-unit-price">
          ${price}
        </td>
        <td className="cart-unit-quantity">
          <span>{quantity}</span>
        </td>
        <td className="cart-unit-total">
          ${price * quantity}
        </td>
      </tr>

  )
}

export default CartProduct