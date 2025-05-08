import { useState, useEffect } from "react"

export default function HomePage() {

    const [products, setProducts] = useState("");

useEffect(() => {
    fetch('https://fakestoreapi.com/products')
    .then(res=>res.json())
    console.log(res.json())
    .then(json=>setProducts(json))
    console.log(json)
})

    return (
            <></>
    )
}