import axios from "axios";
import { useEffect, useState } from "react";

function CartPage() {
    const [cart, setCart] = useState();
    const [products, setProducts] = useState();

    useEffect(() => {
        axios
            .get("https://fakestoreapi.com/carts/1")
            .then((response) => setCart(response.data))
            .catch(err => console.log(err));
        axios
            .get("https://fakestoreapi.com/products")
            .then(response => setProducts(response.data))
            .catch(err => console.log(err));
    }, []);

    const nameAndQuantity = (product) => {
        return product.title;
    }

    return (
        <>
            <h1>Cart Page</h1>
            <p>The user {`${cart && cart.userId}`} have a in his cart: </p>
            {cart && cart.products.map(p => (
                <div key={p.productId}>
                    <p>{p.quantity} - {products && nameAndQuantity(products
                        .find(pro => pro.id === p.productId)
                    )}
                    </p>
                </div>
            ))}
        </>
    );
}

export default CartPage;