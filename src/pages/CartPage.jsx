import React from 'react';
import { Link } from 'react-router-dom';
import { useState, useEffect } from "react";
import { useParams } from 'react-router-dom';

const CartPage = () => {
    //const { cartId } = useParams();
    const [cart, setCart] = useState(none);

    /* useEffect(() => {
        const fetchCart = async () => {
            try {
                const response = await fetch('https://fakestoreapi.com/carts/5');
                const data = await response.json();
                //console.log('cart data:', data);
                setCart(data);

            } catch (error) {
                console.log(error);
            }
        };
        fetchCart();
    }, []); */

    useEffect(() => {
        fetch(`https://fakestoreapi.com/carts/5`)
            .then(response => response.json())
            .then(parsed => {
                //console.log('load cart data', parsed);
                setCart(parsed);
            })
            //call fetch for each id....
            .catch(err => console.log(err));
    }, []);

    /* const fetchProductById = (id) => {
        useEffect(() => {
            //forEach ?
            fetch(`https://fakestoreapi.com/products/${id}`) //for each id in cart.products ?!
                .then(response => response.json())
                .then(parsed => {
                    console.log('products data: ', parsed);
                    //setCart(parsed);
                })
                .catch(err => console.log(err));
        }, []);
    }; */


    // console.log('cart.products: ', cart.products); //array inside

    /*  const arrrrrr = cart.products.forEach((product) => { fetchProductById(product.id); });
     console.log(arrrrrr); */


    return (
        <div>CartPage</div>
    );
};

export default CartPage;