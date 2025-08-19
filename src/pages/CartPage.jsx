import axios from "axios";
import { useEffect, useState } from "react";
import ProductListItem from "../components/ProductListItem";

function CartPage() {
  const [cart, setCart] = useState([]);
  const [cartProducts, setCartProducts] = useState([]);
  useEffect(() => {
    getData();
  }, []);

  const getData = async () => {
    try {
      const response = await axios.get(`https://fakestoreapi.com/carts/${Math.floor(Math.random() * 7)}`);
      setCart(response.data.products);
      const promiseArray = response.data.products.map(product => axios.get(`https://fakestoreapi.com/products/${product.productId}`))
      const anotherResponse = await Promise.all(promiseArray);
      setCartProducts(anotherResponse.map(eachResponse => {
        return ({...eachResponse.data, quantity: (response.data.products.find(product => product.productId === eachResponse.data.id).quantity)})
      }));
    } catch (error) {
      console.log(error)
    }
  }

  return (
    <div>
      {cartProducts.map(product => <ProductListItem product={product} key={product.id} />)}
    </div>
  )
}
export default CartPage