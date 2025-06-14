import axios from "axios";
import { useEffect, useState } from "react";

function CartPage() {
  const [products, setProduct] = useState([]);
  const [cart, setCart] = useState([]);
  
  const getAllProducts = () => {
    axios.get(("https://fakestoreapi.com/products"))
      .then((response) => {
        console.log(response.data)
        setProduct(response.data)})
      .catch((error) => console.error(error));
  }
  
  useEffect(() => {
    getAllProducts()
  }, [])
  
  useEffect(() => {
    axios.get(("https://fakestoreapi.com/carts/1"))
      .then((response) => {
        console.log(response.data.products)
        setCart(response.data.products)})
      .catch((error) => console.error(error))
  }, []);
  


  return (
    <div>
      {cart.length > 0 && cart.map((item) => {
        const product = products.find((product) => product.id === item.productId )

        return <div key={product.id}>{product.title}</div>
      })}
    </div>
  );
}

export default CartPage;