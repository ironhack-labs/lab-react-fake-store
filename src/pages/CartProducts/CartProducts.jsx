import { useEffect, useState } from "react";
import axios from "axios";
const CartProducts = ({ productId, quantity }) => {


    const [product, setProduts] = useState([]);

    useEffect(() => {
        axios
            .get(`https://fakestoreapi.com/products/${productId}`)
            .then(Response => {
                setProduts(Response.data)
            })
            .catch(err => console.log(err))
    }, [])

    return (
        <article className="articleCard">
            <img src={product.image} className="imageProduct"></img>
            <div className="titleCard">{product.title}</div>
            <div className="categoryCard">{product.category}</div>
            <div className="priceCard">${product.price}</div>
            <div className="priceCard">{quantity}</div>
            <div className="totalPrice">${quantity * product.price}</div>

        </article>
    )
}

export default CartProducts