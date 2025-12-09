import { useState, useEffect } from "react";
import axios from "axios";

function CartPage() {
    const [cart, setCart] = useState(null);

    useEffect(() => {
        axios
            .get("https://fakestoreapi.com/carts/5")
            .then((response) => {
                setCart(response.data);
            })
            .catch((error) => {
                console.log("Error cargando carrito:", error);
            });
    }, []);

    if (!cart) {
        return <p>Cargando carrito...</p>;
    }

    return (
        <div className="CartPage">
            <h1>Carrito de compra</h1>

            <p><strong>ID del carrito:</strong> {cart.id}</p>
            <p><strong>ID usuario:</strong> {cart.userId}</p>

            <h2>Productos en el carrito</h2>

            <ul>
                {cart.products.map((item) => (
                    <li key={item.productId}>
                        Producto ID: {item.productId} — Cantidad: {item.quantity}
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default CartPage;