import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

function CartPage() {
    const [cartDetail, setCartDetail] = useState(null);

    const fetchCartData = async () => {
        const id = Math.round(Math.random() * 5 + 1);
        const response = await fetch(`https://fakestoreapi.com/carts/${id}`);
        const data = await response.json();
        setCartDetail(data);
    };

    useEffect(() => {
        fetchCartData();
    }, []);

    console.log(cartDetail);
    return (
        cartDetail &&
        cartDetail.products.map((p) => {
            return (
                <li key={p.id}>
                    <Link to={`/product/details/${p.productId}`}>{p.productId}</Link>
                </li>
            );
        })
    );
}

export default CartPage;
