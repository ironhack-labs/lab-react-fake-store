import { useEffect } from "react";
import { useState } from "react";
import ProductCard from "../components/ProductCard";

function CartPage() {
    const [products, setProducts] = useState(null);

    const randomCartId = Math.floor(Math.random() * (10 - 1 + 1) + 1);
    console.log(randomCartId)

    const transformIdToDetails = async (baseProducts) => {
        const detailedProductsArray = []
        for (const productInCart of baseProducts){
            const response = await fetch(`https://fakestoreapi.com/products/${productInCart.productId}`);
            const product = await response.json();
            detailedProductsArray.push(product)
        }

        setProducts(detailedProductsArray);
    }

    useEffect(() => {
        
        fetch('https://fakestoreapi.com/carts/'+randomCartId)
        .then(response => response.json())
        .then(data => transformIdToDetails(data.products))
        .catch(error => console.log(error))
    }, [])

    console.log(products)
    return ( 
        <div className="CartPage">
            {products && products.map(product => {
                
                return <ProductCard key={product.id} id={product.id} title={product.title} image={product.image} category={product.category} description={product.description} price={product.price}/>
            })}
        </div>
     );
}

export default CartPage;