import axios from "axios"
import { useEffect, useState } from "react"
import './ProductCartRow.css'

const ProductCartRow = ({ productId, quantity }) => {

    const [product, setProduct] = useState({})

    useEffect(() => {
        axios
            .get(`https://fakestoreapi.com/products/${productId}`)
            .then(response => {
                setProduct(response.data)
            })
    }, [])
    return (
        <div className="ProductCartRow">
            <img className="ProductCartColumn" src={product.image} alt="" />
            <p className="ProductCartColumn" >{product.title}</p>
            <p className="ProductCartColumn" >${product.price}</p>
            <p className="ProductCartColumn" >X{quantity}</p>
            <p className="ProductCartColumn" >Total: ${product.price * quantity}</p>

        </div>
    )
}

export default ProductCartRow