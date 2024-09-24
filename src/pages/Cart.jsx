import { useEffect, useState } from "react"
import { Link } from "react-router-dom"

function Cart() {

    let numero = (Math.ceil(Math.random() * 7)).toString()
    const [productCart, setProductCart] = useState(null)
    
    const getData = async ()=>{
        setProductCart(null)
        let data = await fetch(`https://fakestoreapi.com/carts/${numero}`)
        data = await data.json()
        let listaId = []
        data.products.forEach(producto => {listaId.push(producto.productId)})
        let productsInCart = []
        for (let id of listaId){
            let productAdd = await fetch(`https://fakestoreapi.com/products/${id}`)
            productAdd = await productAdd.json()
            productsInCart.push(productAdd)
        }
       setProductCart(productsInCart)
    }

    useEffect(()=>{
        getData()
        return ()=>{}
    }, [])

    if(productCart === null){
        return <h1>...Recopilando carrito</h1>
    }

    return (
        <div>
            {productCart.map((product)=>{
            return(
            <Link to={`/product/details/${product.id}`} key = {product.id}>
            <div className="product-row">
                <div className="product-row-izq">
                <div className="image-container">
                    <img src={product.image} alt="" />
                </div>
                <p>{product.title}</p>
                <p>{product.category}</p>
                </div>
                <div className="product-row-der">
                <p>${product.price}</p>
                <p>{product.description.substring(0, 50)}...</p>
                </div>
            </div>
            </Link>
            )

        })}    
        </div>
    )
}

export default Cart