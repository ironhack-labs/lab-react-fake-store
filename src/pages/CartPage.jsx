import axios from "axios";
import { useEffect, useState } from "react";
import CartProduct from "../components/CartProduct";

function Cart() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    axios
      .get("https://fakestoreapi.com/carts/2")
      .then((res) => setProducts(res.data.products))
      .catch((e) => console.log(e));
  }, []);

  return (
    <div>
      {products.map((productObj) => {
        console.log(productObj);
        return (
          <CartProduct
            key={productObj.productId}
            id={productObj.productId}
            quantity={productObj.quantity}
          />
        );
      })}
    </div>
  );
}
export default Cart;
