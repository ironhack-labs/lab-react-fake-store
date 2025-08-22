import axios from "axios";
import { useEffect, useState } from "react";

function CartPage() {
  const [cartProducts, setCartProducts] = useState([]);
  useEffect(() => {
    getCartData();
  }, []);

  const getCartData = async () => {
    try {
      const apiResponse = await axios.get(`https://fakestoreapi.com/carts/5`);
      const cart = apiResponse.data.products;
      console.log(`cart:`, cart);

      const productsArr = [];
      for (let index = 0; index < cart.length; index++) {
        const apiResponse2 = await axios.get(`https://fakestoreapi.com/products/${cart[index].productId}`);
        // console.log(`api response 2:`, apiResponse2.data);
        productsArr.push(apiResponse2.data);
      }
      setCartProducts(productsArr);
      console.log(`CartProducts:`, cartProducts);
    } catch (error) {
      console.log(error);
    }
  };

  if (cartProducts === null) {
    return <h3>Loading...</h3>;
  }
  return (
    <div>
      <h1>Your cart</h1>
      {cartProducts.map((eachProduct) => (
        <div className="card" key={eachProduct.id}>
          <img className="product-img" src={eachProduct.image} alt="" />
          <p>{eachProduct.title}</p>
          <p>{eachProduct.category}</p>
          <p>${eachProduct.price}</p>
        </div>
      ))}
    </div>
  );
}
export default CartPage;
