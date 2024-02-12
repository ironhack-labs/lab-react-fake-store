import { useState, useEffect } from "react";
import axios from "axios";
import { useParams, Link } from "react-router-dom";


function ProductListPage() {
  // The state variable `products` is currently an empty array [], 
  // but you should use it to store the response from the Fake Store API (the list of products).
  const [cart, setCart] = useState({});
  const [cartProducts, setCartProducts] = useState([]);

  const cartId = useParams().cartId;

  // To fetch the list of products, set up an effect with the `useEffect` hook:

  useEffect(() => {
    axios.get(`https://fakestoreapi.com/carts/${cartId}`)
      .then((result) => {
        setCart(result.data)
        return result.data
      })
      .then((resultAll) => {
        axios.all(resultAll.products.map((endpoint) =>
        axios.get(`https://fakestoreapi.com/products/${endpoint.productId}`))).then(
          (data) => setCartProducts(data.map((element) => element.data)),
        );
      })
      .catch((error) => console.log(error))
  }, []);

  return (
    <div className="CartPage">
      {cart.userId === undefined || cartProducts.length === 0 ? <p>Gathering the cart products...</p> :
        <>
          <h1>User ID : {cart.userId}</h1>{
            cartProducts.map((element, index) => {
              return(
                <div className="card" key={element.key}>
                  <Link to={`/product/details/${element.id}`}>
                    <div className="flex-center">
                      <div className="element">
                        <div className="element-image">
                          <img src={element.image} alt="ProductImg" />
                        </div>
                      </div>
                      <h1 className="element">{element.title}</h1>
                      <p className="element">{element.category}</p>
                      <p className="element">${element.price}</p>
                      <p className="element">x{cart.products[index].quantity}</p>
                      </div>
                    </Link>
                </div>
              )
            })
            
          }
          <div className="card">
            <h1>Total: ${cartProducts.reduce((acc, curr, index) => curr.price * cart.products[index].quantity + acc, 0)}</h1>
          </div>
        </>
      }
    </div>
  );
}

export default ProductListPage;
