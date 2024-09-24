import { useEffect, useState } from "react";
import { Navigate, useParams } from "react-router-dom";

function CartPage() {

    const [cartProducts, setCartProducts] = useState({});
    const {id} = useParams();

    // const [productDetail, setProductDetail] = useState(null);

    useEffect(()=>{
        getData();
    }
    ,[]);

    async function getData() {
        try {
            const response = await fetch(`https://fakestoreapi.com/carts/${id}`);
            const data = await response.json();
            setCartProducts(data);
            console.log(data);
            
        } catch (error) {
            console.log(error);
            // navigate("/error")
        }
    }

    // if(!Object.keys(cartProducts).length || !productDetail) return <h3>Loading page...</h3>
    if(!Object.keys(cartProducts).length) return <h3>Loading page...</h3>

    return(
        <></>
        // <ul key={cartProducts.id}>
        //     {cartProducts.products.map((product)=>{
        //         <li>{product.id} : {product.quantity}</li>
        //     })}
        // </ul>
    );
}

export default CartPage;