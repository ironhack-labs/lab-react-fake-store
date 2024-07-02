import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

const CartPage = () => {

    const [cartItems, setCartItems] = useState([]);   

    // fetching cart using axios
    useEffect(() => {
        axios.get('https://fakestoreapi.com/carts/1') // card id can be different depending on which cart we want to fetch from fake store API
          .then(response => {
            if(response.status ===200){
                setCartItems(response.data.products); // returns a JSON with a list of products in the cart, but it does not return the details of the products.
            }
            else console.log('Promised resolved- Server responded with error', response.status); // throw new Error('server responded with error', response.status);
            
          })
          .catch(error => {
            console.error('Promised rejected- Error getting cart, server didn\'t respond:', error);
          });
      }, []);

      useEffect(() => {
        const productsArr = cartItems.map(item => {
            axios.get(`https://fakestoreapi.com/products/${item.id}`) //To get the details of each product in cart, request to the products endpoint https://fakestoreapi.com/products
        });
        
        Promise.all(productsArr).then((response) => {})
        
      }, [cartItems] )
      

    return (  
        <div className="cart-page">
            <h2> Shopping cart </h2>
            <ul>
                {cartItems.map(item => (
                
                <Link to={`/product/details/${item.productId}`} key={item.id}>
                    <li className="listItem card flex-center">
                        <p>{item.title}</p>
                        <p>Quantity: {item.quantity}</p>
                        <p>Price: ${item.price}</p>
                    </li>
                </Link>
                ))}
            </ul>
        </div>
        
    

    );
}
 
export default CartPage;