import { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";

function CartPage() {
    const [cart, setCart]=useState({});
    const [cartProducts, setCartProducts]=useState([])
    const [productData, setProductData]=useState([]);
    
    const {cartId} = useParams();

    function fetchCartData(cartId) {
        fetch(`https://fakestoreapi.com/carts/${cartId}`)
        .then(response => response.json())
        .then(jsonData => {
            setCart(jsonData);
            setCartProducts(jsonData.products);
            console.log(cart.products);
            fetchProductData();
        })
        .catch(error => console.error(error));


    }
    const fetchProductData = ()=>{
        fetch('https://fakestoreapi.com/products')
        .then(jsonData => setProductData(jsonData))
        .catch(error => console.error(error));
    }

    useEffect(()=>{
        fetchCartData(cartId);
      }, [])

    return(
        <>
            <p>{cartId}</p>
            <ul>
                {cart.products && cart.products.map((cartItem)=>{
                    /*
                    const product = productData.find((product) => product.id === cartItem.productId)
                    console.log(product);
                    */
                    return
                        {/*
                        <div  className='product-card' key='cartItem.productId'>
                            <img src="{product.image}" alt="{product.title}" />
                            <p className = 'product-title'>{product.title}</p>
                            <p>{product.category}</p>
                            <p>{'$'+product.price.toFixed(2)}</p>
                            <p className = 'product-description'>{product.description}</p>
                            
                        </div>
                         */}
                    )
                })}
                {/*}
                {cart.products.map((cartItem)=>{
            return(
                  <div className="product-card">
                    <img src={cartItem.image} alt={cartItem.title} />
                    <p className="product-title">{cartItem.title}</p>
                    <p>{cartItem.category}</p>
                    <p>{'$'+cartItem.price.toFixed(2)}</p>
                    <p className="product-description">{cartItem.description}</p>
                  </div>
              )
            })}
        */}
            </ul>
        </>
       )
}

export default CartPage;