import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";


function CartPage() {


    const [cart, SetCart] = useState(null); 
    const [productsCart, SetProductsCart] = useState(null);

    const {id} = useParams();

    useEffect(()=> {
        axios
            .get(`https://fakestoreapi.com/carts/${id}`)
            .then((response)=> SetCart(response.data))
            .catch((error)=> console.log(error))

    }, [])
    
    useEffect(()=> {
        axios
            .get(`https://fakestoreapi.com/carts/products`)
            .then((response)=> SetProductsCart(response.data))
            .catch((error)=> console.log(error))

    }, [])
    
    return (
        <div>
            {cart && cart.map((item)=> {

                item.productId = productsCart.id
                return (
                    <div>
                        {cart && products && cart.map((item) => {
                            const product = productsCart.find((product) => product.id === item.productId);
                            return (
                                <div key={item.productId}>
                                <img src={product.image} style={{ width: 200, height: 200, border: "1px solid grey", margin: 15 }} />
                                <h3 style={{ width: 150, margin: 20 }}>{product.title}</h3>
                                <p style={{ width: 150, margin: 20 }}>{product.category}</p>
                                <p style={{ width: 150, margin: 20 }}>{product.price}€</p>
                                <p style={{ width: 300, margin: 20 }}>{item.quantity}</p>
                                </div>
                            );
                        })}
                    </div>
                )
            })}
            
        </div>
    )
}

export default CartPage