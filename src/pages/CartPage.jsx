import { useEffect, useState } from "react";
import axios from "axios";
import "./ProductListPage.css"

const apiCartURL = "https://fakestoreapi.com/carts/" + Math.ceil(Math.random() * 7);
const apiURL = "https://fakestoreapi.com/products/"

function CartPage() {
  const [cart, setCart] = useState([]);
  const [products, setProducts] = useState();

  useEffect(() => {
    axios.get(apiCartURL).then(response => setCart(response.data.products)).catch(error => console.log("this error:", error));
    return () => { };
  }, []);

  useEffect(() => {
    axios.get(apiURL).then(response => setProducts(response.data)).catch(error => console.log("this error:", error));
    return () => { };
  }, []);

  const arrayCart = cart.map(element1 => {
    let arrayOutput = products.find(element2 => element2.id === element1.productId);
    arrayOutput.quantity = element1.quantity
    return arrayOutput;
  })



  return (
    <div className="ProductListPage">
      {
        arrayCart.map(element => {
          console.log(element);
          return (
            <div key={element.id} className="major-container">
              <img className="container-part" src={element.image} alt="" />
              <p className="container-part"><span className="boldq">{element.title}</span></p>
              <p className="container-part">{element.category}</p>
              <p className="container-part">$ {element.price}</p>
              <p className="container-part">{element.description}</p>
              <p className="container-part">{element.quantity}</p>
            </div>
          );
        })
      }
      <div className="major-container">
        <p className="container-part">{`Total: $ ${arrayCart.reduce((acc,cur) => acc + cur.price*cur.quantity,0)}`}</p>
      </div>
    </div>
  );
}

export default CartPage;
