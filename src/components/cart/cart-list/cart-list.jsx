import { useEffect, useState } from "react";
import * as ProductsServices  from './../../../services/products-service';
import CartItem from "../cart-item/cart-item";

function CartList () {

    const [cart, setCart] = useState([]);

    useEffect(() => {
        const cart = async () => {
            const cart = await ProductsServices.getCart();
            setCart(cart);
        }

        cart();
    }, []);

    const handleSetQuantity = (id, quantity) => {
        setCart((prevCart) => {
            return prevCart.map((product) => {
                return (product.id === id) 
                            ?   {...product, quantity}
                            :   product;
            });
        });
    };

    const subtotal = cart.reduce((total, item) => total + (item.price * item.quantity), 0);

    const total = Number(subtotal + 5).toFixed(2);
        
    return (
        <div>
            <h2 className="my-4">🛒 Carrito de la compra</h2>

            <div className="row">  
                <div className="col-8">
                    {cart.length > 0 
                        ? cart.map((cartItem) => ( <CartItem 
                                                        key={cartItem.id}
                                                        item={ cartItem }  
                                                        onChangeQuantity = {handleSetQuantity}
                                                     />))
                        : <div className="fw-bold py-3"> Cart empty!</div>
                    }
                </div>

                <div className="col-4">
                    <div className="">
                        <div className="card-body">
                            <h5 className="card-title py-4">Resumen</h5>

                            <ul className="list-group list-group-flush mb-3">
                                <li className="list-group-item d-flex justify-content-between">
                                    <span>Subtotal</span>
                                    <strong>{ subtotal.toFixed(2) } €</strong>
                                </li>
                                <li className="list-group-item d-flex justify-content-between">
                                    <span>Envío</span>
                                    <strong>5 €</strong>
                                </li>
                                <li className="list-group-item d-flex justify-content-between">
                                    <span>Total</span>
                                    <strong>{ total } €</strong>
                                </li>
                            </ul>

                            <button className="btn btn-primary w-100">
                                Finalizar compra
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default CartList;