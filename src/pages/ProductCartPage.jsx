
import * as StoreService from '../services/store-service';
import { useState, useEffect } from 'react';
import CartItem from '../components/carts/cart-item/cart-item';

function ProductCartPage() {
    const [cart, setCart] = useState([]);
    
    useEffect (() => {
        async function getCartInformation() {
            const cartInfo = await StoreService.getCartByID('1');
            setCart(cartInfo);
        }
        getCartInformation();
    }, [])

    return (
        <>
            <div className="mt-5 container d-flex shadow mb-5 bg-primary-subtle rounded justify-content-between align-items-center"
                style={{width: '750px', height: '50px'}}>
                <div style={{width: '50px'}}>Product</div>
                <div style={{width: '300px'}}>Title</div>
                <div style={{width: '200px'}}>Price</div>
                <div style={{width: '200px'}}>Quantity</div>
            </div>
            {cart.map((product) => <CartItem key={product.id} {...product}></CartItem>)}
            <div className="mt-5 container d-flex shadow mb-5 bg-success-subtle rounded justify-content-center align-items-center"
            style={{width: '750px', height: '50px'}}>
                Total ${cart.reduce((totalPrice, product) => totalPrice += (product.price * product.quantity), 0)}
            </div>
            
        </>
    );
}

export default ProductCartPage;