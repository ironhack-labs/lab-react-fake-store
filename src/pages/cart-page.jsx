import { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

const http = axios.create({
  baseURL: "https://fakestoreapi.com",
  timeout: 10000,
  headers: {"Content-Type": "application/json"}
});

function CartPage(){
  const [ products, setProducts ] = useState([]);
  const [ cartProducts, setCartProducts] = useState([]);
  
  useEffect(()=>{
    const fetchCart = async () => {
      try {
        const response = await http.get(`/carts/1`);
        setCartProducts([...response.data.products])
      } catch (error) {
        console.error(error);
      }
    }
    fetchCart();
  },[]);

    useEffect(()=>{
      const fetchProduct = async () => {
        try {
          const response = await http.get(`/products`);
          setProducts([...response.data]);
        } catch (error) {
          console.error(error);
        }
      }
  
      fetchProduct();
  
    },[]);

  if(!products) {
    return (
      <div>
        <p>La cesta está vacía</p>
      </div>
    );
  } else {
    let total = 0;
    return (
      <div className="CartPage d-flex flex-column align-items-center">
        {cartProducts.map((p) =>{
          const info = products.filter((prod) => prod.id === p.productId);
          const [{ title, image, price }] = info;
          total += Number(p.quantity * price);
          return (
          <div key={p.productId} className="w-100 d-flex align-items-center border-1 border-black-subtle p-2 m-2">
            <div className="m-2">
              <img className="object-fit-contain border-1 border-black-subtle p-2" src={image} alt={title} />
            </div>
            <div>
              <h2 className="fs-4 "><strong>{title}</strong></h2>
              <p className="price">{p.quantity} x {price}</p>
            </div>
          </div>
          )})}
        <hr />
        <h2>Total: {total}</h2>
        <Link to="/">
          <button className="btn bg-success text-white" type="button">Back</button>
        </Link>
      </div>
    );
  }
}

export default CartPage;