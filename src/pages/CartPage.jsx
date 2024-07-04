import { useEffect, useState } from "react";
import fetchProduct from "../helpers/fetchProduct";
import { API_URL } from '../helpers/constants';
// import axios from "axios";

const CartPage = () => {

    const [cartItems, setCartItems] = useState([]);  

    const fetchCart = async () => {
        try{
            const response = await fetch(`${API_URL}/carts/1`);
            if(response.ok){
                const cartData = await response.json();
                const productsPromises = cartData.products.map(currentProduct => fetchProduct(currentProduct.productId)); // returns array of promises

                Promise.all(productsPromises)
                .then((productsResults) => {
                    console.log(productsResults)

                    setCartItems(cartData.products.map(currentProduct => {
                        const currentProductDeatils = productsResults.find(currentProductResult => currentProductResult.id === currentProduct.productId) // find details of the each products from the cart
                        return {quantity: currentProduct.quantity, ...currentProductDeatils }

                    }))
                    

                })
                .catch((error) => {console.log(error)});
            }


        }
        catch (error) {
            console.log(error);
          }
      
    }

    useEffect(()=>{
        fetchCart();
    }, []) // fetch Cart once, at mounting

    return (  
        
        <div className="cart-page">
            <h2> Shopping cart </h2>
            <ul>
                {cartItems.map(item => (                    
                    <li key={item.productId} className="listItem card flex-center">
                        <p>{item.title}</p>
                        <p>Quantity: {item.quantity}</p>
                        <p>Price: ${item.price}</p>
                    </li>                
                ))}
            </ul>
        </div>
        
    

    );
}
 
export default CartPage;

/*
    const [cartItems, setCartItems] = useState([]);  
    // fetching cart using axios
    useEffect(() => {
        axios.get('https://fakestoreapi.com/carts/2') // card id can be different depending on which cart we want to fetch from fake store API
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
            axios.get(`https://fakestoreapi.com/products/${item.productId}`) //To get the details of each product in cart, request to the products endpoint https://fakestoreapi.com/productsproductId
        });
        
        Promise.all(productsArr)
        .then((responses) => {

        })
        .catch(error =>{
            console.error('Failed to fetch product details:', error);})
        
      }, [cartItems] )
      
      
      return (  
        
        <div className="cart-page">
            <h2> Shopping cart </h2>
            <ul>
                {cartItems.map(item => (

                <Link to={`/product/details/${item.productId}`}>
                    
                    <li key={item.productId} className="listItem card flex-center">
                        <p>{item.title}</p>
                        <p>Quantity: {item.quantity}</p>
                        <p>Price: ${item.price}</p>
                    </li>
                </Link>
                
                ))}
            </ul>
        </div>
        
    

    );*/