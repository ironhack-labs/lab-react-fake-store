import { useEffect, useState } from "react";
import axios from 'axios'


const CartPage = () => {

    const [cartProducts, setCartProducts] = useState(null)

  useEffect(() => {
      axios.get("https://fakestoreapi.com/carts/5")
      .then(response => {
        setCartProducts(response.data.products)
          console.log(response.data)
      })
      .catch(e => {
          console.log('Error getting products from the API...')
          console.log(e);
      })
  }, [])

    return (
        <div>
          <p>test</p>
      <p >{ cartProducts !== null && cartProducts[0].quantity}</p>
  
   
        </div>
    );
}
 
export default CartPage;