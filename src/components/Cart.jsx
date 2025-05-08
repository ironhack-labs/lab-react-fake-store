import { useState, useEffect } from "react"
import { useParams } from "react-router-dom";

function Cart(){
    const [cart, setCart] = useState({})
    const [products, setProducts] = useState([])
    
    const params = useParams();
    console.log("this is params:", params)

    async function getCart(){
        const cartResponse = await fetch(`https://fakestoreapi.com/carts/${params.id}`);
        const cartJson = await cartResponse.json();
        setCart(cartJson);
    }

    async function getProducts() {
        const productsResponse = await fetch("https://fakestoreapi.com/products")
        const productsResponseJson = await productsResponse.json();
        setProducts(productsResponseJson);
    }

    useEffect(()=>{
        getCart();
        getProducts();
    },[])

    console.log("this is the cart:", cart.products)
    console.log("this are products:", products)

    return(
        <div>
            <h1>this is the fck cart</h1>
            <ul>
                {
                    cart.products ? (
                        ////compare info products with cartproducs.id to render images and all that
                        cart.products.map((product)=>{
                    return <li>{product.productId}</li>
                        })
                        
                    ) : (
                        <h2>LOADING DATA</h2>
                    )
                }
            </ul>

        </div>
    )
}

export default Cart