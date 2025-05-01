import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";



function CartPage() {
    const [cartProducts, setCartProducts] = useState([]);
    const { cartId } = useParams();


    useEffect(() => {

        fetch(`https://fakestoreapi.com/carts/${cartId}`)
            .then((res) => res.json())
            .then((cartData) => {

                const productIds = cartData.products.map((product) => product.productId || product.id);


                Promise.all(
                    productIds.map((id) =>
                        fetch(`https://fakestoreapi.com/products/${id}`).then((res) =>
                            res.json()
                        )
                    )
                )
                    .then((productDetails) => setCartProducts(productDetails))
                    .catch((error) => console.error("Error fetching product details:", error));
            })
            .catch((error) => console.error("Error fetching cart data:", error));
    }, []);

    if (cartProducts.length === 0) {
        return <p>Loading cart products...</p>;
    }

    return (
        <div className="CartPage">
            <h1>Shopping Cart</h1>
            <div className="cart-products">
                {cartProducts.map((product) => (
                    <div key={product.id} className="cart-product">
                        <img src={product.image} alt={product.title} />
                        <h2>{product.title}</h2>
                        <p>{product.description}</p>
                        <p>Price: ${product.price}</p>
                        <p>Category: {product.category}</p>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default CartPage;